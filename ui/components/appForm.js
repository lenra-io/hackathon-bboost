const actions = require("../../listeners/actions");

module.exports = appForm;

function appForm(applicationName, forms, errors) {
    let fields = [
        {
            type: "text",
            value: applicationName,
        },
    ];

    if (applicationName == "YouTube") {
        fields.push({
            type: "flex",
            direction: "col",
            children: [
                {
                    type: "radio",
                    value: "1080",
                    groupValue: forms[applicationName] != null ? forms[applicationName].quality : "",
                    label: "1080p",
                    onPressed: {
                        action: actions.SET_QUALITY,
                        props: {
                            page: applicationName,
                            quality: "1080"
                        }
                    }
                },
                {
                    type: "radio",
                    value: "720",
                    groupValue: forms[applicationName] != null ? forms[applicationName].quality : "",
                    label: "720p",
                    onPressed: {
                        action: actions.SET_QUALITY,
                        props: {
                            page: applicationName,
                            quality: "720"
                        }
                    }
                },
                {
                    type: "radio",
                    value: "480",
                    groupValue: forms[applicationName] != null ? forms[applicationName].quality : "",
                    label: "480p",
                    onPressed: {
                        action: actions.SET_QUALITY,
                        props: {
                            page: applicationName,
                            quality: "480"
                        }
                    }
                }
            ]
        });
    }

    fields.push({
        type: "textfield",
        value: "",
        error: applicationName in errors,
        hintText: "Nombre d'heures (15min = 0.25)",
        onChanged: {
            action: actions.SET_HOURS,
            props: {
                page: applicationName
            }
        },
    });

    return {
        type: "flex",
        mainAxisAlignment: "center",
        crossAxisAlignment: "center",
        fillParent: true,
        spacing: 1,
        children: fields
    }
}