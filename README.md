
# JOJOY Project

A combined **frontend + backend** web application built using HTML, CSS, JavaScript, and Python (Flask).

## 🔧 Project Structure

```
JOJOY_Cleaned/
├── frontend/          # HTML, CSS, JavaScript files
│   └── index.html     # Entry point (open via Live Server)
├── backend/           # Python backend (Flask or other scripts)
│   └── app.py         # Main backend script
├── requirements.txt   # Python dependencies
├── .gitignore         # Git ignore file
└── README.md          # Project documentation
```

## 🚀 Running the Project

### Frontend
Open `frontend/welcome.html` using **Live Server** in VS Code or any static server.

### Backend
1. Navigate to the backend folder:
    ```bash
    cd backend
    ```
2. Create a virtual environment (optional but recommended):
    ```bash
    python -m venv venv
    source venv/bin/activate  # On Windows: venv\Scripts\activate
    ```
3. Install dependencies:
    ```bash
    pip install -r ../requirements.txt
    ```
4. Run the app:
    ```bash
    python app.py
    ```

Visit `http://127.0.0.1:5000` in your browser if using Flask.

## 📝 Notes

- Avoid committing `.venv` or environment folders.
- Ensure relative links in HTML (no absolute system paths).
