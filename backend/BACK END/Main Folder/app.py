from flask import Flask, request, jsonify
from flask_cors import CORS
import openai
import os

app = Flask(__name__)
CORS(app)

# Secure OpenAI API Key
openai.api_key = os.getenv("OPENAI_API_KEY")

@app.route('/')
def home():
    return jsonify({
        "message": "Welcome to the Jojoy Travel Planner API!",
        "endpoints": {
            "/plan-trip": "POST - Generate full travel itinerary",
            "/urgent-booking": "POST - Get urgent travel availability"
        }
    })

# === Endpoint 1: Full Travel Plan ===
@app.route('/plan-trip', methods=['POST'])
def plan_trip():
    try:
        data = request.json
        required = ['name', 'from', 'destination', 'people', 'from_date', 'to_date', 'budget', 'transportation']
        missing = [field for field in required if field not in data]
        if missing:
            return jsonify({"error": f"Missing fields: {', '.join(missing)}"}), 400

        user_input = (
            f"Plan a travel itinerary for {data['name']} from {data['from']} to {data['destination']} "
            f"for {data['people']} people, from {data['from_date']} to {data['to_date']}. "
            f"Their budget is {data['budget']} and they prefer {', '.join(data['transportation'])}. "
            f"Include recommended hotels, places to visit, and things to do."
        )

        response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "system", "content": "You are a helpful travel planner assistant."},
                {"role": "user", "content": user_input}
            ],
            max_tokens=500
        )
        plan = response['choices'][0]['message']['content'].strip()
        return jsonify({"plan": plan})

    except openai.error.OpenAIError as e:
        return jsonify({"error": f"OpenAI API Error: {str(e)}"}), 500
    except Exception as e:
        return jsonify({"error": f"Server Error: {str(e)}"}), 500

# === Endpoint 2: Urgent Travel Availability ===
@app.route('/urgent-booking', methods=['POST'])
def urgent_booking():
    try:
        data = request.json
        print("[DEBUG] Received request:", data)  # DEBUG

        required = ['from', 'to', 'date']
        missing = [field for field in required if field not in data]
        if missing:
            return jsonify({"error": f"Missing fields: {', '.join(missing)}"}), 400

        prompt = (
            f"Give urgent travel options from {data['from']} to {data['to']} for the date {data['date']}. "
            f"List 4 trains, 4 buses, and 4 flights with realistic names and times and show if it running in india only"
        )

        response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "system", "content": "You are an AI that helps users book urgent travel options."},
                {"role": "user", "content": prompt}
            ],
            max_tokens=300
        )

        plan = response['choices'][0]['message']['content'].strip()
        return jsonify({"options": plan})

    except openai.error.OpenAIError as e:
        print("[ERROR] OpenAI Error:", str(e))  # DEBUG
        return jsonify({"error": f"OpenAI API Error: {str(e)}"}), 500
    except Exception as e:
        print("[ERROR] Server Error:", str(e))  # DEBUG
        return jsonify({"error": f"Server Error: {str(e)}"}), 500


if __name__ == '__main__':
    app.run(debug=True)
