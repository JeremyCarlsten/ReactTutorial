var Forum = React.createClass({

    getInitialState: function () {
        return {
            allAnswers: {
                "1": {
                    body: "Isn't that all about time travel?",
                    correct: false
                },
                "2": {
                    body: "React and flux are a tool and methodologies for building the front end of web applications.",
                    correct: false
                },
                "3": {
                    body: "React is a synonym for 'respond'",
                    correct: false
                }
            }
        }
    },
    render: function () {
        return (
            <div>
                <ForumHeader allAnswers={ this.state.allAnswers } />
            </div>
        );
    }
});