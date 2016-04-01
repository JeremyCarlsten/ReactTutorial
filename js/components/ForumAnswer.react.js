var ForumAnswer = React.createClass({

    propTypes: {
      answer: React.PropTypes.required
    },
    render: function () {

        var answer = this.props.answer;

        return (
            <div className="panel panel-default">
                <div className="panel-body">
                    { answer.body }
                </div>
            </div>
        );
    }
});