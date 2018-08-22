var surveyValueChanged = function (sender, options) {
    var el = document.getElementById(options.name);
    if (el) {
        el.value = options.value;
    }
};
var list = [];
var json = {
    questions:
        {  type: "text",
            key: "name",
            name: "name",
            title: "Your name:",
            isRequired: true
        }, {
            type: "text",
            key: "email",
            name: "email",
            title: "Your e-mail",
            isRequired: true
        }, {
            type: "checkbox",
            key: "location",
            name: "location",
            title: "What location do you want to volunteer for?",
            isRequired: true,
            colCount: 4,
            choices: [
                "Haymarket",
                "South End",
                "Roslindale"]

        },{
            type: "checkbox",
            key: "type",
            name: "person",
            title: "I am a ...",
            isRequired: true,
            colCount: 4,
            choices: [
                "Student",
                "Organization",
                "Business",
                "Other"]
        }

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
