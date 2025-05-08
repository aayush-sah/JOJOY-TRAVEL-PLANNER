from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/plan-trip', methods=['POST'])
def plan_trip():
    data = request.json
    # Process data and generate trip details
    trip_details = {
        "places_to_visit": ["Museum", "Park", "Beach"],
        "hotel_preferences": ["Hotel A", "Hotel B"],
        "travel_estimate": data['budget'] - 500,  # Example budget logic
        "itinerary": ["Day 1: City Tour", "Day 2: Beach Visit"],
        "preferences": data['preferences']
    }
    trip_id = "12345"  # Example trip ID
    return jsonify({"status": "success", "trip_id": trip_id, "details": trip_details})

@app.route('/trip-details')
def trip_details():
    trip_id = request.args.get('trip_id')
    # For now, mock details
    details = {
        "trip_id": trip_id,
        "places_to_visit": ["Museum", "Park", "Beach"],
        "hotel_preferences": ["Hotel A", "Hotel B"],
        "travel_estimate": 1000,
        "itinerary": ["Day 1: City Tour", "Day 2: Beach Visit"]
    }
    return render_template('trip_details.html', details=details)

if __name__ == '__main__':
    app.run(debug=True)
