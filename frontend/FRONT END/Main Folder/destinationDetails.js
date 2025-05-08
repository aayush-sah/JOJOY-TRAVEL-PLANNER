const destinationData = {
    "Madhya Pradesh": {
        "places": [
            { name: "Kanha National Park", info: "A great wildlife destination, known for its tiger reserve.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtzMXEO0o1erQMnrsSaDnJgSpEnTar6-KeOQ&s" },
            { name: "Sanchi Stupa", info: "Ancient Buddhist site with a rich history.", image: "https://www.mptourism.com/images/point-of-interest/The%20Great%20Stupa.webp" },
            { name: "Pachmarhi", info: "A scenic hill station with breathtaking views.", image: "https://s3.india.com/wp-content/uploads/2024/07/Fascinating-Facts-About-Pachmarhi.jpg##image/jpg" },
            { name: "Bhedaghat", info: "Famous for marble rocks and waterfalls.", image: "https://www.mptourandtravels.com/bhedaghat/destinations/8.jpg" },
            { name: "Ujjain", info: "Known for Mahakaleshwar Temple and Kumbh Mela.", image: "https://s3.india.com/wp-content/uploads/2024/05/Feature-Image-_-Ujjain.jpg?impolicy=Medium_Widthonly&w=350&h=263" },
            { name: "Orchha", info: "Historic town with medieval temples and palaces.", image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/1d/24/96/the-marvellous-orchha.jpg?w=1200&h=-1&s=1" },
            { name: "Gwalior Fort", info: "Impressive fort known for its architecture.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKDAFWBDruJ8mKqP71Oplnkj5jH3eZs4_dog&s" },
            { name: "Ranthambore National Park", info: "Famous for wildlife safaris.", image: "https://static.toiimg.com/photo/97076305.cms" },
            { name: "Chitrakoot", info: "Sacred place with temples and beautiful scenery.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR436PhO2Pe_H4TtS-QiCNMRJr72GstQO1-BQ&s" },
            { name: "Khajuraho", info: "Renowned for its UNESCO-listed temples.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLnojWSh3OGoTNSD8omnoTvu1a72opCqo8gA&s" }
        ]
    },
    "Maharashtra": {
        "places": [
            { name: "Gateway of India", info: "Iconic landmark in Mumbai.", image: "https://cdn.britannica.com/79/188879-050-25E7733E/Gateway-of-India-Mumai-monument-2012.jpg" },
            { name: "Elephanta Caves", info: "Ancient rock-cut temples.", image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/4e/d4/42/cave-2.jpg?w=1200&h=1200&s=1" },
            { name: "Ajanta Caves", info: "Ancient Buddhist caves with paintings.", image: "https://cdn.britannica.com/70/153470-050-F4594C27/Ajanta-Caves-Maharashtra-India.jpg" },
            { name: "Taj Mahal Palace", info: "Luxury hotel in Mumbai with a rich history.", image: "https://www.outthere.travel/wp-content/uploads/2020/12/Taj-Mahal-Palace-1.jpg" },
            { name: "Lonavala", info: "Popular hill station near Mumbai and Pune.", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Lonavalamh.jpg/800px-Lonavalamh.jpg" },
            { name: "Mahabaleshwar", info: "Known for its scenic landscapes and strawberry farms.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRovUlwBUpnyprS18lK5G7urrDuBxf5zmCIdg&s" },
            { name: "Alibaug", info: "A coastal town famous for beaches.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9ajKuETS5hdzKjJmrMC3dVrr6z7S3Jlb53g&s" },
            { name: "Shirdi", info: "A pilgrimage site for devotees of Sai Baba.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLe2A4QWFVGg2QyABoHk6aAJhz8pUkOV8pCg&s" },
            { name: "Nashik", info: "Famous for vineyards and religious sites.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDmNtCJ25s7NM9uNCM1181bWAw7yfBJ8AvjA&s" },
            { name: "Sinhagad Fort", info: "Historic fort near Pune with great views.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc9-3n-QDbX2H4E-GcBwP_KaZYx7ekvVJLKQ&sg" }
        ]
    },
    "Kerela": {
        "places": [
            { name: "Munnar", info: "Famous for tea plantations and cool weather.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeq1z_LbbuQk3WwOelens6vcn7SfwEAc-EwQ&s" },
            { name: "Kumarakom", info: "Scenic location on Vembanad Lake.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCESYg8kppLGgnQLmLP8AsYRPHknhOHK2PZQ&s" },
            { name: "Fort Kochi", info: "Known for colonial architecture and vibrant culture.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZWa6efHQR7dObZs7bEpYVCQoYk6-I6bg_0Q&s" },
            { name: "Varkala", info: "Beach destination with cliffs and temples.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThBXb2_1WYiovkXs-3sqB5h2a6Trl4VhdYRg&s" },
            { name: "Wayanad", info: "Known for wildlife and natural beauty.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4NbNVuzZ3q-RcReVBmTrBeMyK0DNxdoTyAQ&s" },
            { name: "Athirappilly", info: "Known as the ‘Niagara of India’.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXB7xf2QqVfijtmqdDyivL7R5dcQSoGUDQQw&s" },
            { name: "Sabarimala", info: "Famous pilgrimage destination.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuRPtV5wVqSpj2g8r3ePUdrG2W0sDCDMzvlw&s" },
            { name: "Thekkady", info: "Known for Periyar Wildlife Sanctuary.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvjs8L7-m-3VENIS154jBFAl1HI6VWsabEnw&s" },
            { name: "Kovalam", info: "Famous beach town with resorts.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQckn5crrUsojEKk06wKH2mv_ycjOT2mDjhSQ&s" }
        ]
    },
    "Himachal Pradesh": {
        "places": [
            { name: "Shimla", info: "Capital city, known for its colonial architecture.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrzAKWRtyRvTsrXt36RNP5V3hTmBjU9MqUIw&s" },
            { name: "Manali", info: "A popular hill station with adventure sports.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjlhZQ2-Nek_sL5AkG2H1FBOBZUWY0236KFw&s" },
            { name: "Kullu", info: "Known for its temples and rivers.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShWabkcpoLT1NF8fGRcgr6Bw_O11Hv9omkCQ&s" },
            { name: "Dalhousie", info: "Charming hill station with colonial charm.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWOtirE34n7s5L85UcQW5al9M1iQvfy4UcUw&s" },
            { name: "Kasauli", info: "Small hill station with pine trees.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxQGqdOQlHEPUwBllgmT7bPQjzkSMpZoLTbw&s" },
            { name: "Spiti Valley", info: "A remote valley known for its beauty.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSugpeH_7FLAX0QwmLrcjMH85ex3XWYbuECzg&s" },
            { name: "Leh", info: "Ladakh region, known for Buddhist monasteries.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp9s0ExOZ6ST-pYq3MZX23rrxeM090mGfUsg&s" },
            { name: "Rohtang Pass", info: "A mountain pass offering scenic views.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgNy7XgVY8wfZb1qrKv7MfatkqLhZsSrgwGQ&s" },
            { name: "Tirthan Valley", info: "Known for nature and river activities.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFtp6l2QGd0lqNPgTZYEhScPXlOdOgQx05Zg&s" },
            { name: "Chamba", info: "Known for temples and cultural heritage.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2hfCcQ3rYrYjI6bMfKtuwUpaeqkOsp1IJcw&s" }
        ]
    },
    "Jharkhand": {
        "places": [
            { name: "Betla National Park", info: "Rich wildlife and scenic beauty, ideal for safaris.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRROvg6by1TgYVNE2jwMTeQEnMMouoCLDcryQ&s" },
            { name: "Hundru Falls", info: "Famous waterfalls surrounded by lush greenery.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKUM7qbNtTTxf20hzOiursZe32ZeqayP7wtg&s" },
            { name: "Netarhat", info: "Popular hill station known for sunrise and sunset views.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFfxRPgaQDBZIu2iWxH1TDsURzfQd0gbDKgQ&s" },
            { name: "Dassam Falls", info: "A picturesque waterfall on the Kanchi River.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfORcYp8rs3Adcf14tjXKd8e2p05YFH7cahQ&s" },
            { name: "Ranchi Lake", info: "A serene lake for boating and relaxation.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmjHV6rSnlRKCX1rpkMAfrpxWcnfSyBJ4nfQ&s" }
        ]
    },
    "Gujarat": {
        "places": [
            { name: "Gir National Park", info: "Home to Asiatic lions, famous for wildlife safaris.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJdQRH-ZtZ3xxpBvsDLp2Qn-Lpu97inWuFdQ&s" },
            { name: "Rann of Kutch", info: "A vast salt desert known for its cultural festival.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLOyPMm-48Uq0VyJSASNq3H_Y9QBEqVV5KOw&s" },
            { name: "Somnath Temple", info: "One of the 12 Jyotirlinga shrines of Lord Shiva.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlhBUhZrJQ1BoWBCtOAvT8XHK2r1f3AxJTUw&s" },
            { name: "Statue of Unity", info: "The world's tallest statue of Sardar Patel.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU6dfGZjLsaT7IrTikgmABzUqvHhMX1C-SUQ&s" },
            { name: "Dwarka", info: "Ancient city known for Dwarkadhish Temple.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0SxU8KcSRRLFsf3sCSu7nA4VP2IohFWGiXA&s" }
        ]
    },
    "Rajasthan": {
        "places": [
            { name: "Jaipur", info: "Known for Amber Fort, Hawa Mahal, and City Palace.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeo96Bh79v1JgVE-VdmL8e-un5xFS2aFTLbA&s" },
            { name: "Udaipur", info: "City of Lakes, famous for palaces and gardens.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKc8n9dHpJ769H8LoKtteRvgWgxakwePrcgA&s" },
            { name: "Jaisalmer", info: "Known for the Golden Fort and desert safaris.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEmP0bB0gYE3HV-vZm_vwWiMxxW97-ISlpAA&s" },
            { name: "Pushkar", info: "Holy city known for its lake and annual camel fair.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP1k4swn4kfiPQ-PH99RaRzWZwiAga3ciajw&s" },
            { name: "Mount Abu", info: "Hill station known for Dilwara Temples and sunset points.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5PWjbBQGiCpXOaAqb-xAp7O0UYJLKG3o2LA&s" }
        ]
    },
    "Goa": {
        "places": [
            { name: "Baga Beach", info: "Known for nightlife and water sports.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYl7scjVxBwe6PeUGRxfzeTSJT7KuaUSjRKw&s" },
            { name: "Fort Aguada", info: "A 17th-century fort with scenic ocean views.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNinbvQkGlAdsEJv10DQ2sdsBKf2UVugNjsA&s" },
            { name: "Dudhsagar Falls", info: "Spectacular waterfalls on the Mandovi River.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEgqaVsfGI9mkl--b2AViWO3SBeg230DB0XQ&s" },
            { name: "Palolem Beach", info: "Peaceful beach with palm trees and dolphin spotting.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs-p1C_VCKiZ_nofQ4vr0wVH3VB-DH5Illcw&s" },
            { name: "Basilica of Bom Jesus", info: "UNESCO World Heritage Site with historical significance.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5c_LS5xinnJ56eu646r6V2f-hDkf89WVkXA&s" }
        ]
    },
    "Arunachal Pradesh": {
        "places": [
            { name: "Tawang", info: "Known for its monasteries and scenic views.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBggIS9NiSnwrgs8-z2CmjjRDde9unChb_-w&s" },
            { name: "Ziro Valley", info: "Famous for lush green paddy fields and Apatani culture.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4CLKA4_kcxJ6YTWMIrdgIT7x7oPT_cw6I_Q&s" },
            { name: "Namdapha National Park", info: "Renowned for its diverse flora and fauna.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS9DrXrrVL84aDOAS4chZz1eH73VFn2cwaMQ&s" },
            { name: "Sela Pass", info: "A scenic mountain pass known for snowfall.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR8l3vE5adz-5Gh8Bs7WRJW97_mDPu28lMwg&s" },
            { name: "Bomdila", info: "Famous for monasteries and orchid farms.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWPk_WWdIZKjfwQUeJj-ArfIkgCR6GFzsBDg&s" }
        ]
    },
    "Jammu and Kashmir": {
        "places": [
    { name: "Srinagar", info: "Famous for Dal Lake and houseboats.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXcS5Fj6XEpXUYl_tYNGLEMJMr3p4Fq07ZUA&s" },
    { name: "Gulmarg", info: "Known for skiing and beautiful meadows.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF2yOqwkKeYTBXS860l_YxQ1z_LfcQAq-OGQ&s" },
    { name: "Pahalgam", info: "Famous for the Lidder River and stunning valleys.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_Lkfoy_rImGker9AzpWmAfu7Q1b7n60e1pw&s" },
    { name: "Sonamarg", info: "Known for glaciers and trekking trails.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9DgTpdqHlOhsGHqCKqZMabxNiZke0Apql3w&s" },
    { name: "Leh", info: "Famous for monasteries and mountain passes.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH4QJDELx6Ed0O2pERDsozwnlz5lhDaOxEuw&s" },
    { name: "Nubra Valley", info: "Known for sand dunes and Bactrian camels.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPnpfSUdXZlx_HCNjCGDwjZZfJIjLjVuXrbA&s" },
    { name: "Vaishno Devi", info: "A famous pilgrimage site.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQexovCRSK-TCCzurnQRU66e_3DAR15xRVB4g&s" },
    { name: "Patnitop", info: "Known for serene views and adventure activities.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ27B1SNHrIqGhG1lQyw4CGTON836mL3BLmQ&s" },
    { name: "Kargil", info: "Famous for its historical significance.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRum4KEPidK0HAPRm0L1o3G20dUoFu6I4AH8Q&s" },
    { name: "Yusmarg", info: "Known for meadows and lush greenery.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQey7_e9yrLDBAW6-m23I34R4xJqPcpyh6fsw&s" }
]
    },
    "Uttarakhand": {
       "places": [
    { name: "Mussoorie", info: "Famous as the Queen of Hills.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqGjeYecivXUJyyHfhmMhVRh5Lbso2icOjiA&s" },
    { name: "Nainital", info: "Known for the beautiful Naini Lake.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVSE2E4HvvIFa79qgW7h09vldIecJ7Y_W3Ew&s" },
    { name: "Rishikesh", info: "The yoga capital of the world.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo8_FwP0V_uRV1lSes2ReW-R3AI8_l66Hhuw&s" },
    { name: "Haridwar", info: "Famous for the Ganga Aarti.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYh6rjkpuUCYLiuziJseFiT3XCKM1I7zEMkA&s" },
    { name: "Auli", info: "Renowned for skiing and scenic views.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA-LdIKTJjElfWyfWcF3-08dGxzU-DqOpw6Q&s" },
    { name: "Dehradun", info: "Known for caves and waterfalls.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNYrdBzeTVUEmhV8sd5ro0gpImRhUvGiGdQg&s" },
    { name: "Kedarnath", info: "A sacred pilgrimage site.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHmwr9mOrs-OMO0Wz2-KlpOlZaF9dg1AGTpw&s" },
    { name: "Badrinath", info: "One of the Char Dham pilgrimage sites.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmHnZPWLq_V9UXRT7XRwriADNES6Pmi_nx0w&s" },
    { name: "Jim Corbett National Park", info: "Renowned for tiger safaris.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3sJMkMH2XUnCG9lThprpRx_ksM5BPqoyCvA&s" },
    { name: "Ranikhet", info: "Known for its serene beauty.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSElM0n6-heWOZJBHOJtFPEAYPPElYfC1ZiOg&s" }
] 
    },
    "Uttar Pradesh": {
        "places": [
    { name: "Taj Mahal", info: "One of the Seven Wonders of the World.", image: "https://images.unsplash.com/photo-1548013146-72479768bada?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGFqJTIwbWFoYWx8ZW58MHx8MHx8fDA%3D" },
    { name: "Varanasi", info: "Famous for ghats and spiritual aura.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS949R5dgWh7q-ZSyNDU9GLeZjzMM5QLJW-0Q&s" },
    { name: "Lucknow", info: "Renowned for its Nawabi culture.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStwVoSnZdxkCz1HOwmPrfbBXQQCBG9P-28Lg&s" },
    { name: "Ayodhya", info: "Known as the birthplace of Lord Rama.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOnqJXT6MYj16cWLpMSL19_wUiaI8hvJ5jkQ&s" },
    { name: "Allahabad", info: "Famous for the Sangam of three rivers.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTqWHqcMVyyedGDO_qvxTJSmQfKH408OU4lQ&s" },
    { name: "Mathura", info: "The birthplace of Lord Krishna.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo0zzsWJTdlkn36KoC4ajSfzWiap_FX9o6qg&s" },
    { name: "Sarnath", info: "A Buddhist pilgrimage site.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB4oCAHr2G3kMyoPM9pBk95XEJz1m4KS77LQ&s" },
    { name: "Agra Fort", info: "A UNESCO World Heritage site.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRamICTT8cq8P8RpocXpu4M8k0bSOjGi8eTSw&s" },
    { name: "Jhansi", info: "Famous for its historical significance.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxw4tfH8xB0_NSTME3CDGSEovY6J8Jqk74_w&s" },
    { name: "Chitrakoot", info: "Known for its religious importance.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGExGZAlXcA-7LRSfRemsiqV4XPLcF1ofhrg&s" }
]
    },
    "Tamil Nadu": {
        "places": [
    { name: "Chennai", info: "Known for Marina Beach and temples.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb5NryP4fZGwTUYZu_mhO0S9RBKHqfEHAwmg&s" },
    { name: "Madurai", info: "Famous for the Meenakshi Temple.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL3NsP3k64SEjnlDtogFZX7KBUy_BXmHNf_g&s" },
    { name: "Coimbatore", info: "Known for serene landscapes.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn-5dniczRmMcbMp5Xt3Sl0Q9ZzA7PBan7qg&s" },
    { name: "Ooty", info: "Popular hill station in the Nilgiris.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKDMmm-q0zuvr59i1jvXluJ_SxkvMsk-daTw&s" },
    { name: "Kanyakumari", info: "Known for the Vivekananda Rock Memorial.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgCtbiLJAFtgw20zsDR4jtastqqbD0PrIgiA&s" },
    { name: "Tiruchirappalli", info: "Famous for Rockfort Temple.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq_M0smaOj1QyCXHQB5h7KMrCqcHaqahxcXA&s" },
    { name: "Mahabalipuram", info: "Known for ancient rock-cut temples.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwG_SAxfrnYt4Z82NnVTAt6sDcNMricGpFUA&s" },
    { name: "Rameswaram", info: "Famous for Ramanathaswamy Temple.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd8T64f8Zhlr72AYE1wuKSjLpl1_MFqG6WBw&s" },
    { name: "Kodaikanal", info: "Renowned as the Princess of Hill Stations.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdbNsVIurV0us6rHAcEwyisbi7nBheRV6Uxw&s" },
    { name: "Velankanni", info: "Known for the Basilica of Our Lady of Good Health.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPvx_k65JXs00q4GbjqugBQXgPmFKb2Q3Lhg&s" }
]
    },
    "Sikkim": {
        "places": [
    { name: "Gangtok", info: "Capital city, known for its monasteries and scenic views.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYWkHGbBDru7rfUr7CGf6TFHwBhRNyC9I1Pw&s" },
    { name: "Nathula Pass", info: "A high-altitude pass connecting India and China.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSGBhan5hgXtYLog9ZJN6M7OeIR5S2iqmOLg&s" },
    { name: "Tsomgo Lake", info: "A glacial lake surrounded by mountains.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSDrv2IZ2-wnLGauJeXEB0YLQENv1KJhBFHQ&s" },
    { name: "Pelling", info: "Known for views of Kanchenjunga and ancient monasteries.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrAZQ0vibG6qOSLbpsUhCrufB6VG5M3Evc2w&s" },
    { name: "Ravangla", info: "Famous for Buddha Park and peaceful ambiance.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4DTIO2V6NT2Leaxh7X5bRA-9WZumU37xa9g&s" },
    { name: "Zuluk", info: "A small village known for its stunning hairpin bends.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvlsp3oJ82YlqfWmnf7Ss1AM4BAvnvD1_UVQ&s" },
    { name: "Lachen", info: "Gateway to Gurudongmar Lake.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeb6sBiochVQ288HX7OyQUbUNgv34BmdT8ctSC8jKLRFxX9drQR6Fc8HhCc2kc6DQ3kbs&usqp=CAU" },
    { name: "Yumthang Valley", info: "Also called the Valley of Flowers.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWmSA69JL4v699dYY4EHg6SAi0bJbZmlmn-A&s" },
    { name: "Namchi", info: "Home to the massive statue of Guru Padmasambhava.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEoxt4z1uWSL-ni9JmIkxKUCDLIcPxh-4pjg&s" },
    { name: "Gurudongmar Lake", info: "One of the highest lakes in the world.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs79LVyckr2vN_v4e73SfcT2YxaDW1lRDcWw&s" }
]
    },
    "Andhra Pradesh": {
       "places": [
    { name: "Tirupati", info: "Famous for the Tirumala Venkateswara Temple.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmCRFQKmd2D2HPTqxU1Kn4Shl4gaNQqSPbJg&s" },
    { name: "Visakhapatnam", info: "Known for its beaches and Araku Valley.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0GhQCydXllncf9pAwPgTLGF3ZJd6VlsEg4g&s" },
    { name: "Araku Valley", info: "Famous for coffee plantations and serene landscapes.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOXOu_BBdDQIiAwYEEl8e5UYlHWEvnaE-H4A&s" },
    { name: "Amaravati", info: "Known for its Buddhist stupas.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1tb8iUaNcpWpentvFJIame6JHxJc4yYTGkw&s" },
    { name: "Lepakshi", info: "Famous for the Veerabhadra Temple and Nandi statue.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrtpvoTTQFwtoy_aMQ1A3kHE0ZW2Hi1xQ_IA&s" },
    { name: "Srikalahasti", info: "Renowned for the Shiva temple.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSw4p9gy41N1UBs0Rqeij20V3SV--cK6qFnw&s" },
    { name: "Vijayawada", info: "Known for Kanaka Durga Temple and Prakasam Barrage.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwKOIKJBPLuRN5IiTX3u2_69QaYMjOcucHvl86A8pDSWeeo5WUDSe2ejQheSVPROiHIQk&usqp=CAU" },
    { name: "Horsley Hills", info: "A hill station with lush greenery.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCDeBIq9vFbiIlFuOi1O2LHEtxftqYH2MsSw&s" },
    { name: "Nagarjunakonda", info: "An archaeological site with Buddhist relics.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKLBrPuKOQHA3xfqH1lNHRUNCSPYFS_hjngA&s" },
    { name: "Rajahmundry", info: "Known as the Cultural Capital of Andhra Pradesh.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiw72cUXjGlBrQBDHhs4Zk1oMW4RK-R_o7Tw&s" }
] 
    },
    "Punjab": {
        "places": [
    { name: "Amritsar", info: "Home to the Golden Temple.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRklLg4OS4iiuTem7LEgOBvDuhlJH1qCkhl6Q&s" },
    { name: "Chandigarh", info: "A planned city known for Sukhna Lake and Rock Garden.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWhQEko29cf2ITbOfhobmMR2NwzmgWH-kAag&s" },
    { name: "Jallianwala Bagh", info: "Historical site commemorating the massacre.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1DPq6qdFNp3g5e3n5q-wWvGm1mfj8jeLZMQ&s" },
    { name: "Patiala", info: "Known for its forts and royal heritage.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmUkIc23s6ami1OxABlz9Wr4wcd1zKHXgl4A&s" },
    { name: "Wagah Border", info: "Famous for the beating retreat ceremony.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtbZsn-INcDJcBpTfuXrgPs4dJ3q-7RXGh1w&s" },
    { name: "Anandpur Sahib", info: "A significant Sikh pilgrimage site.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeGn2t38yFDlMZKnGXJU65z5MIKssriEfVBQ&s" },
    { name: "Kapurthala", info: "Famous for Jagatjit Palace.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw5GEPs6kJb_Sfiz0ifymVr6792R2KcXaxkg&s" },
    { name: "Bathinda", info: "Known for its forts and thermal plants.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNbreiSK7E9n-XtIfeWDfBcrXnvxLBx8r3QQ&s" },
    { name: "Ludhiana", info: "A hub of industrial and cultural heritage.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDP7KWqIaqjVgBWOw4ErV349uhnj3iWRJ4AA&s" },
    { name: "Ropar", info: "Known for archaeological sites.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr_Dt1wrZPLM81hSWPRRBKZxg6UYoh38DBTg&s" }
]
    },
    "Assam": {
        "places": [
    { name: "Kaziranga National Park", info: "Known for one-horned rhinoceroses.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFvG6yg-cgTTr25BWwJfoLNU6ASOpi8nMt9g&s" },
    { name: "Guwahati", info: "Home to Kamakhya Temple.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBgYZ5bA3cr_3290L6LmgfBXt4qAxhvqC_pQ&s" },
    { name: "Majuli", info: "The world's largest river island.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHxGDgeLZ2NNF-_yKWoHTL2w8BO8vhd8AzNw&s" },
    { name: "Sivasagar", info: "Known for Ahom dynasty monuments.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg_ZHI1LiU6ixHm5bSROGPQhB-il89Dpqnjg&s" },
    { name: "Tezpur", info: "Renowned for its tea plantations.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAdS9jXpw307Tau5C4fgBhmXjdi0Kn_h8QKBdjTyBb89jbZAPvpdvzH00hPmi4-gcE-Hk&usqp=CAU" },
    { name: "Dibrugarh", info: "Known as the Tea City of India.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz8-Vv2VtiSRjaMi6xJeqjVzNsZ4HrkqGjCms34oGKNnGRRpUIOZpL5dVQPlu0phCtbCI&usqp=CAU" },
    { name: "Haflong", info: "The only hill station in Assam.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTILsWxRfe5uxw1w9iDhtLbIJ2kYEUyVeFHmTDQ6ij1RXjby9HmvKsl0wmuEhQYcywUY6I&usqp=CAU" },
    { name: "Manas National Park", info: "A UNESCO World Heritage Site.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT65lgFvnELO1Oqfm3dHTFXRj1uaElANwGL2TVDzEVSfliWOdPC4NRZ_hTfV0YiaskHTKA&usqp=CAU" },
    { name: "Silchar", info: "Known for its serene Barak Valley.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6Yc2PIPPvk_DhNKo6HRhyuwIKspOj03SEG4o9PsZriqeZwt6p46wt_yTNOmYFJhsOJ4A&usqp=CAU" },
    { name: "Dhemaji", info: "Rich in tribal culture and natural beauty.", image: "https://img.nayatrip.com/images/sightseeing/big/2307.jpg" }
]
    },
    "Leh and Ladakh": {
        "places": [
    { name: "Pangong Lake", info: "Famous for its changing colors and breathtaking views.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_bs9kAXuXDSQ5b_UOfpB5JHtVbNoNWPPjFh10WPJUlRUOKOpaR_nyL0cwZk4c6ip5Yx8&usqp=CAU" },
    { name: "Nubra Valley", info: "Known for its sand dunes, double-humped camels, and picturesque scenery.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcjuaU8CObxEb-DPDFzdYE1P7wFDz7IuBhMXAniJlTLSEkDf5p0Sk6q1fHXyrhyf8UYlk&usqp=CAU" },
    { name: "Leh Palace", info: "A historic royal palace offering panoramic views of Leh.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPWCFIpMJwWkugPT3jXT2HAyjXuFDxdXS3RcRfzQTk4RNfn1YMSc3cH52qckDb4Sc9Nm8&usqp=CAU" },
    { name: "Magnetic Hill", info: "A gravity hill known for its optical illusion of vehicles moving uphill.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMiZHXYnxK39HdYKqImV4y-drF7x0qoxur0V_WDlOtWrc50N8J3awt_Led4aLmlJi-pI8&usqp=CAU" },
    { name: "Tso Moriri Lake", info: "A high-altitude lake known for its serene beauty and migratory birds.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpPz7ZnqsDvo4UXlmvbDNqaKMtk495j2vg2DMH-B1hDkD63J4H1-Beq63BvFW9d9kyaHA&usqp=CAU" },
    { name: "Khardung La", info: "One of the highest motorable roads in the world.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJKfgBd-kA4HOJlCgaritWAtC0VEinyiU2OHJ1_zNfPrWD3umZ3qBetOag_tF6A4nJ96k&usqp=CAU" },
    { name: "Shanti Stupa", info: "A Buddhist white-domed stupa offering a panoramic view of Leh.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwX_8GEC2UIGxuahL6_fn5aCy-dh53Po9BIqRMUs-tpJXoBPDvdW8dMh67DJyZ_WiZSa4&usqp=CAU" },
    { name: "Hemis Monastery", info: "One of the largest monasteries in Ladakh, known for its annual festival.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8OgrRa3CarEByecTJwAGY4XxdmipOx8P0U7GKulHFuy2_m8s2sWatG70pYXrVwxdqpJA&usqp=CAU" },
    { name: "Zanskar Valley", info: "Known for its rugged landscapes and adventure activities like trekking and river rafting.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF2rvyrLvYVH_05OSNSpoPKL3itSl2Ji36Hwsg5voCu9TY8_Y8TLv1E_zSIUo7HEGQRI0&usqp=CAU" },
    { name: "Spituk Monastery", info: "An ancient monastery known for its spectacular views and Buddhist relics.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX7ObjZMGaz5ieYHRY8bzLu7mxdS9xv5ypEH7kpJHXMFZGd2I3x8efZczE_m4wIymRUvM&usqp=CAU" }
]
    },



    // Add more states and places with similar structure
};

function getDestinationDetails() {
    const state = document.getElementById('state').value;
    const destinationList = document.getElementById('destination-list');
    destinationList.innerHTML = ''; // Clear previous results
    
    if (state) {
        const places = destinationData[state]?.places;
        if (places) {
            places.forEach(place => {
                const listItem = document.createElement('li');
                listItem.innerHTML = `
                    <div class="destination-item">
                        <img src="${place.image}" alt="${place.name}">
                        <div>
                            <strong>${place.name}</strong>: ${place.info}
                        </div>
                    </div>
                `;
                destinationList.appendChild(listItem);
            });
        } else {
            destinationList.innerHTML = 'No information available for this state.';
        }
    } else {
        destinationList.innerHTML = '';
    }
}
function getDestinationDetails() {
            const state = document.getElementById('state').value;
            const destinationList = document.getElementById('destination-list');
            destinationList.innerHTML = ''; // Clear previous results
            
            if (state) {
                const places = destinationData[state]?.places;
                if (places) {
                    places.forEach(place => {
                        const listItem = document.createElement('li');
                        listItem.innerHTML = `
                            <div class="destination-item">
                                <img src="${place.image}" alt="${place.name}" onclick="showDetails('${place.name}', '${place.info}')">
                                <div>
                                    <strong>${place.name}</strong>: ${place.info}
                                </div>
                            </div>
                        `;
                        destinationList.appendChild(listItem);
                    });
                } else {
                    destinationList.innerHTML = 'No information available for this state.';
                }
            } else {
                destinationList.innerHTML = '';
            }
        }

        function showDetails(name, info) {
            document.getElementById('place-name').textContent = name;
            document.getElementById('place-info').textContent = info;
            document.getElementById('details-modal').style.display = 'block';
            document.querySelector('.modal-overlay').style.display = 'block';
        }

        function closeModal() {
            document.getElementById('details-modal').style.display = 'none';
            document.querySelector('.modal-overlay').style.display = 'none';
        }

        function getDestinationDetails() {
            const state = document.getElementById('state').value;
            const destinationList = document.getElementById('destination-list');
            destinationList.innerHTML = ''; // Clear previous results
        
            if (state) {
                const places = destinationData[state]?.places;
                if (places) {
                    places.forEach(place => {
                        const listItem = document.createElement('li');
                        listItem.innerHTML = `
                            <div class="destination-item">
                                <img src="${place.image}" alt="${place.name}" onclick="redirectToAboutPage('${place.name}')">
                                <div>
                                    <strong>${place.name}</strong>: ${place.info}
                                </div>
                            </div>
                        `;
                        destinationList.appendChild(listItem);
                    });
                } else {
                    destinationList.innerHTML = 'No information available for this state.';
                }
            } else {
                destinationList.innerHTML = '';
            }
        }
        
        function redirectToAboutPage(placeName) {
            window.location.href = `about.html?place=${encodeURIComponent(placeName)}`;
        }
        