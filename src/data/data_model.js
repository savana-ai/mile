export const data_model = {
    "data_model": {
        "entities": [
            {
                "id": "entity_1",
                "name": "User",
                "description": "Represents a customer or M-Pesa user making payments.",
                "attributes": [
                    "User ID",
                    "Name",
                    "Phone Number",
                    "Email Address",
                    "Location (GPS Coordinates)",
                    "Payment Status"
                ],
                "invariants": [
                    "User ID must be unique",
                    "Phone Number must be valid and unique"
                ],
                "business_rules": [
                    "Users must have a valid M-Pesa account for payment transactions",
                    "Payment Status must be updated after each transaction"
                ],
                "methods": [
                    {
                        "name": "Process Payment",
                        "inputs": [
                            {
                                "name": "Payment Amount",
                                "type": "Decimal"
                            },
                            {
                                "name": "Stall/Matatu ID",
                                "type": "String"
                            }
                        ],
                        "output": {
                            "name": "Payment Status",
                            "type": "Boolean"
                        },
                        "steps": [
                            "Validate User's M-Pesa credentials",
                            "Initiate payment request to M-Pesa API",
                            "Confirm payment success/failure",
                            "Update Payment Status based on response"
                        ]
                    }
                ]
            },
            {
                "id": "entity_2",
                "name": "Stall/Matatu",
                "description": "Represents a physical or virtual entity for stalls or matatu operators receiving payments.",
                "attributes": [
                    "Stall/Matatu ID",
                    "Operator Name",
                    "Location (GPS Coordinates)",
                    "Payment Received Status"
                ],
                "invariants": [
                    "Stall/Matatu ID must be unique",
                    "Location must be accurate for service delivery"
                ],
                "business_rules": [
                    "Stalls/Matatus must register in the system to accept payments",
                    "Payment Received Status must reflect the latest payment confirmation"
                ],
                "methods": [
                    {
                        "name": "Verify Payment",
                        "inputs": [
                            {
                                "name": "User ID",
                                "type": "String"
                            },
                            {
                                "name": "Payment Confirmation",
                                "type": "String"
                            }
                        ],
                        "output": {
                            "name": "Payment Verification Status",
                            "type": "Boolean"
                        },
                        "steps": [
                            "Check Payment Confirmation status against transaction ID",
                            "Validate User ID and matching payment amount",
                            "Update Payment Received Status"
                        ]
                    }
                ]
            },
            {
                "id": "entity_3",
                "name": "Payment Transaction",
                "description": "Represents a financial transaction made by a user for a stall or matatu.",
                "attributes": [
                    "Transaction ID",
                    "User ID",
                    "Stall/Matatu ID",
                    "Amount",
                    "Transaction Timestamp",
                    "Payment Status"
                ],
                "invariants": [
                    "Transaction ID must be unique",
                    "Amount must be greater than zero"
                ],
                "business_rules": [
                    "Transaction must be recorded in the system once initiated",
                    "Transaction status must reflect the completion status (success/failure)"
                ],
                "methods": [
                    {
                        "name": "Generate Receipt",
                        "inputs": [
                            {
                                "name": "Transaction ID",
                                "type": "String"
                            }
                        ],
                        "output": {
                            "name": "Receipt Details",
                            "type": "String"
                        },
                        "steps": [
                            "Retrieve Transaction details using Transaction ID",
                            "Generate a printable receipt format",
                            "Send Receipt to User and Stall/Matatu Operator"
                        ]
                    }
                ]
            }
        ],
        "value_objects": [
            {
                "name": "Payment Confirmation",
                "attributes": [
                    "Confirmation Code",
                    "Timestamp",
                    "Payment Status"
                ],
                "invariants": [
                    "Confirmation Code must be unique",
                    "Payment Status must be either 'Success' or 'Failure'"
                ],
                "business_rules": [
                    "Confirmation Code must be sent to both User and Stall/Matatu Operator after payment",
                    "Payment Status must be updated based on real-time confirmation"
                ],
                "methods": [
                    "Send Confirmation to User and Stall/Matatu Operator",
                    "Update Payment Status"
                ]
            }
        ],
        "relationships": [
            {
                "source": "User",
                "target": "Payment Transaction",
                "type": "one-to-many"
            },
            {
                "source": "Stall/Matatu",
                "target": "Payment Transaction",
                "type": "one-to-many"
            },
            {
                "source": "Payment Transaction",
                "target": "Payment Confirmation",
                "type": "one-to-one"
            }
        ]
    }
}
