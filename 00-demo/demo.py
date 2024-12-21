import json

# Input JSON
input_json = {
    "signerNames": [
        {
            "fullname": "Brad",
            "position": "Not Specified",
            "group": "Not Specified"
        },
        {
            "fullname": "Douglas",
            "position": "Not Specified",
            "group": "Not Specified"
        },
        {
            "fullname": "Tatum",
            "position": "Not Specified",
            "group": "Not Specified"
        }
    ],
    "signerValidDate": "2011/03/21"
}

# Transforming the JSON
signer_valid_date = input_json.get("signerValidDate")  # Extract the signerValidDate
for signer in input_json["signerNames"]:  # Iterate through each object in the signerNames array
    signer["signerValidDate"] = signer_valid_date  # Add signerValidDate to each object

# Output JSON
output_json = json.dumps(input_json, indent=4)  # Convert back to JSON format with indentation
print(output_json)
