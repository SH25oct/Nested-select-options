const data = [
    {
        "property_name": "Customers who have",
        "rules": {
            "fields": [
                {
                    "name": "billing_zip",
                    "label": "ZIP Code",
                    "dataType": "string",
                    "operators": [
                        { "name": "equal", "label": "exactly" },
                        { "name": "in", "label": "one of" },
                        { "name": "notIn", "label": "none of" },
                        { "name": "startsWith", "label": "starts with" }
                    ]
                },
                {
                    "name": "30day_value",
                    "label": "30 Days Value",
                    "dataType": "number",
                    "operators": [
                        { "name": "equal", "label": "exactly" },
                        { "name": "greaterThan", "label": "greater than" },
                        { "name": "greaterThanOrEqual", "label": "greater than or equal to" },
                        { "name": "lessThan", "label": "less than" },
                        { "name": "lessThanOrEqual", "label": "less than or equal to" },
                        { "name": "notEqual", "label": "not exactly" }
                    ]
                },
                {
                    "name": "90day_value",
                    "label": "90 Days Value",
                    "dataType": "number",
                    "operators": [
                        { "name": "equal", "label": "exactly" },
                        { "name": "greaterThan", "label": "greater than" },
                        { "name": "greaterThanOrEqual", "label": "greater than or equal to" },
                        { "name": "lessThan", "label": "less than" },
                        { "name": "lessThanOrEqual", "label": "less than or equal to" },
                        { "name": "notEqual", "label": "not exactly" }
                    ]
                },
                {
                    "name": "average_order_value",
                    "label": "Average Order Value",
                    "dataType": "number",
                    "operators": [
                        { "name": "equal", "label": "exactly" },
                        { "name": "greaterThan", "label": "greater than" },
                        { "name": "greaterThanOrEqual", "label": "greater than or equal to" },
                        { "name": "lessThan", "label": "less than" },
                        { "name": "lessThanOrEqual", "label": "less than or equal to" },
                        { "name": "isInTheBest", "label": "in the best" },
                        { "name": "isInTheWorst", "label": "in the worst" },
                        { "name": "notEqual", "label": "not exactly" }
                    ],
                    "operatorOptions": {
                        "isInTheBest": [
                            { "name": "0.1", "label": "10 %" },
                            { "name": "0.2", "label": "20 %" },
                            { "name": "0.3", "label": "30 %" },
                            { "name": "0.4", "label": "40 %" },
                            { "name": "0.5", "label": "50 %" },
                            { "name": "0.6", "label": "60 %" },
                            { "name": "0.7", "label": "70 %" },
                            { "name": "0.8", "label": "80 %" },
                            { "name": "0.9", "label": "90 %" },
                            { "name": "1", "label": "100 %" }
                        ],
                        "isInTheWorst": [
                            { "name": "0.1", "label": "10 %" },
                            { "name": "0.2", "label": "20 %" },
                            { "name": "0.3", "label": "30 %" },
                            { "name": "0.4", "label": "40 %" },
                            { "name": "0.5", "label": "50 %" },
                            { "name": "0.6", "label": "60 %" },
                            { "name": "0.7", "label": "70 %" },
                            { "name": "0.8", "label": "80 %" },
                            { "name": "0.9", "label": "90 %" },
                            { "name": "1", "label": "100 %" }
                        ]
                    }
                }
            ]
        }
    },
    {
        "property_name": "Customers who did",
        "rules": {
            "fields": [
                {
                    "name": "billing_zip",
                    "label": "ZIP Code",
                    "dataType": "string",
                    "operators": [
                        { "name": "equal", "label": "exactly" },
                        { "name": "in", "label": "one of" },
                        { "name": "notIn", "label": "none of" },
                        { "name": "startsWith", "label": "starts with" }
                    ],
                    "suggestions": true
                },
                {
                    "name": "30day_value",
                    "label": "30 Days Value",
                    "dataType": "number",
                    "operators": [
                        { "name": "equal", "label": "exactly" },
                        { "name": "greaterThan", "label": "greater than" },
                        { "name": "greaterThanOrEqual", "label": "greater than or equal to" },
                        { "name": "lessThan", "label": "less than" },
                        { "name": "lessThanOrEqual", "label": "less than or equal to" },
                        { "name": "notEqual", "label": "not exactly" }
                    ]
                },
                {
                    "name": "90day_value",
                    "label": "90 Days Value",
                    "dataType": "number",
                    "operators": [
                        { "name": "equal", "label": "exactly" },
                        { "name": "greaterThan", "label": "greater than" },
                        { "name": "greaterThanOrEqual", "label": "greater than or equal to" },
                        { "name": "lessThan", "label": "less than" },
                        { "name": "lessThanOrEqual", "label": "less than or equal to" },
                        { "name": "notEqual", "label": "not exactly" }
                    ]
                },
                {
                    "name": "average_order_value",
                    "label": "Average Order Value",
                    "dataType": "number",
                    "operators": [
                        { "name": "equal", "label": "exactly" },
                        { "name": "greaterThan", "label": "greater than" },
                        { "name": "greaterThanOrEqual", "label": "greater than or equal to" },
                        { "name": "lessThan", "label": "less than" },
                        { "name": "lessThanOrEqual", "label": "less than or equal to" },
                        { "name": "isInTheBest", "label": "in the best" },
                        { "name": "isInTheWorst", "label": "in the worst" },
                        { "name": "notEqual", "label": "not exactly" }
                    ],
                    "operatorOptions": {
                        "isInTheBest": [
                            { "name": "0.1", "label": "10 %" },
                            { "name": "0.2", "label": "20 %" },
                            { "name": "0.3", "label": "30 %" },
                            { "name": "0.4", "label": "40 %" },
                            { "name": "0.5", "label": "50 %" },
                            { "name": "0.6", "label": "60 %" },
                            { "name": "0.7", "label": "70 %" },
                            { "name": "0.8", "label": "80 %" },
                            { "name": "0.9", "label": "90 %" },
                            { "name": "1", "label": "100 %" }
                        ],
                        "isInTheWorst": [
                            { "name": "0.1", "label": "10 %" },
                            { "name": "0.2", "label": "20 %" },
                            { "name": "0.3", "label": "30 %" },
                            { "name": "0.4", "label": "40 %" },
                            { "name": "0.5", "label": "50 %" },
                            { "name": "0.6", "label": "60 %" },
                            { "name": "0.7", "label": "70 %" },
                            { "name": "0.8", "label": "80 %" },
                            { "name": "0.9", "label": "90 %" },
                            { "name": "1", "label": "100 %" }
                        ]
                    }
                }
            ]
        }
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const propertySelect = document.getElementById('property-name');
    const fieldSelect = document.getElementById('field-name');
    const operatorSelect = document.getElementById('operator-name');
    const operatorOptionSelect = document.getElementById('operator-option');

    const fieldLabel = document.querySelector('label[for="field-name"]');
    const operatorLabel = document.querySelector('label[for="operator-name"]');
    const operatorOptionLabel = document.querySelector('label[for="operator-option"]');

    function populateSelect(select, options, placeholder = 'Select...') {
        select.innerHTML = '';
        const placeholderOption = document.createElement('option');
        placeholderOption.value = '';
        placeholderOption.textContent = placeholder;
        select.appendChild(placeholderOption);

        options.forEach(option => {
            const opt = document.createElement('option');
            opt.value = option.name;
            opt.textContent = option.label;
            select.appendChild(opt);
        });
    }

    function handlePropertyChange() {
        const selectedProperty = data.find(property => property.property_name === propertySelect.value);
        if (selectedProperty) {
            populateSelect(fieldSelect, selectedProperty.rules.fields);
            fieldSelect.classList.remove('hidden');
            fieldLabel.classList.remove('hidden');
            operatorSelect.classList.add('hidden');
            operatorLabel.classList.add('hidden');
            operatorOptionSelect.classList.add('hidden');
            operatorOptionLabel.classList.add('hidden');
        } else {
            fieldSelect.classList.add('hidden');
            fieldLabel.classList.add('hidden');
        }
    }

    function handleFieldChange() {
        const selectedProperty = data.find(property => property.property_name === propertySelect.value);
        const selectedField = selectedProperty.rules.fields.find(field => field.name === fieldSelect.value);
        if (selectedField) {
            populateSelect(operatorSelect, selectedField.operators);
            operatorSelect.classList.remove('hidden');
            operatorLabel.classList.remove('hidden');
            operatorOptionSelect.classList.add('hidden');
            operatorOptionLabel.classList.add('hidden');
        } else {
            operatorSelect.classList.add('hidden');
            operatorLabel.classList.add('hidden');
        }
    }

    function handleOperatorChange() {
        const selectedProperty = data.find(property => property.property_name === propertySelect.value);
        const selectedField = selectedProperty.rules.fields.find(field => field.name === fieldSelect.value);
        const selectedOperator = operatorSelect.value;

        if (selectedField && selectedField.operatorOptions && selectedField.operatorOptions[selectedOperator]) {
            populateSelect(operatorOptionSelect, selectedField.operatorOptions[selectedOperator]);
            operatorOptionSelect.classList.remove('hidden');
            operatorOptionLabel.classList.remove('hidden');
        } else {
            operatorOptionSelect.classList.add('hidden');
            operatorOptionLabel.classList.add('hidden');
        }
    }

    populateSelect(propertySelect, data.map(property => ({ name: property.property_name, label: property.property_name })));
    propertySelect.addEventListener('change', handlePropertyChange);
    fieldSelect.addEventListener('change', handleFieldChange);
    operatorSelect.addEventListener('change', handleOperatorChange);
});
