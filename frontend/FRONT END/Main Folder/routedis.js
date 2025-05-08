document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const from = params.get("from");
    const to = params.get("to");
    const date = params.get("date");

    // Update header
    document.getElementById("from-destination").textContent = from || "--";
    document.getElementById("to-destination").textContent = to || "--";
    document.getElementById("travel-date").textContent = date || "--";

    const trainList = document.getElementById("train-list");
    const busList = document.getElementById("bus-list");
    const flightList = document.getElementById("flight-list");

    function formatMarkdown(text) {
        return text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>").replace(/\*(.*?)\*/g, "<em>$1</em>");
    }

    function createListItem(content) {
        const li = document.createElement("li");
        li.innerHTML = formatMarkdown(content);

        const btn = document.createElement("button");
        btn.textContent = "Book Now";
        btn.onclick = () => alert(`Redirecting to booking for: ${content}`);
        li.appendChild(btn);
        return li;
    }

    function populateSection(sectionArray, container) {
        container.innerHTML = "";
        if (!sectionArray.length) {
            container.innerHTML = "<li>No data available.</li>";
            return;
        }
        sectionArray.forEach(item => container.appendChild(createListItem(item)));
    }

    // Fetch from Flask
    fetch("http://localhost:5000/urgent-booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ from, to, date })
    })
    .then(res => res.json())
    .then(data => {
        if (!data.options) {
            trainList.innerHTML = "<li>No train data available.</li>";
            busList.innerHTML = "<li>No bus data available.</li>";
            flightList.innerHTML = "<li>No flight data available.</li>";
            return;
        }

        const sections = { train: [], bus: [], flight: [] };
        let current = "";

        data.options.split("\n").forEach(line => {
            line = line.trim();
            if (!line) return;

            if (/train/i.test(line)) current = "train";
            else if (/bus/i.test(line)) current = "bus";
            else if (/flight/i.test(line)) current = "flight";
            else if (/^\d+\./.test(line)) sections[current]?.push(line);
        });

        populateSection(sections.train, trainList);
        populateSection(sections.bus, busList);
        populateSection(sections.flight, flightList);
    })
    .catch(err => {
        trainList.innerHTML = `<li>Error: ${err.message}</li>`;
        busList.innerHTML = "";
        flightList.innerHTML = "";
    });
});
