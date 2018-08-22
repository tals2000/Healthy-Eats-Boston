var surveyValueChanged = function (sender, options) {
    var el = document.getElementById(options.name);
    if (el) {
        el.value = options.value;
    }
};

var json = {
    questions: [
        {
            type: "text",
            name: "name",
            title: "Your name:",
            isRequired: true
        }, {
            type: "text",
            name: "email",
            title: "Your e-mail",
            isRequired: true
        }, {
            type: "checkbox",
            name: "location",
            title: "Which Location Is Most Convinient For the Market?",
            isRequired: true,
            colCount: 4,
            choices: [
                "Haymarket",
                "South End",
                "Roslindale"
            ]
        },{
            type: "checkbox",
            name: "Produce",
            title: "I would like ...",
            isRequired: true,
            colCount: 4,
            choices: [
                "Apples",
                "Oranges",
                "Strawberries",
                "Watermelon",
                "Grapes",
                "Melon",
                "Bananas",
                "Kale",
                "Spinach",
                "Tomatoes",
                "Lettuce",
                "Collard Greens",
                "Cucumbers"
            ]
        }
    ]
};

window.survey = new Survey.Model(json);

survey
    .onComplete
    .add(function (result) {
        document
            .querySelector('#surveyResult')
            .innerHTML = "result: " + JSON.stringify(result.data);
    });

survey.data = {
    name: '',
    email: '',
    location: ['']
};

$("#surveyElement").Survey({model: survey, onValueChanged: surveyValueChanged});
