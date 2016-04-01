var ForumAnswer = React.createClass({

    propTypes: {
        answer: React.PropTypes.isRequired,
        onMarkCorrect: React.PropTypes.isRequired
    },
    render: function () {

        var answer = this.props.answer;

        return (
            <div className="panel panel-default">
                <div className="panel-body">
                    { answer.body }
                    <div className="pull-right">
                        <small>
                            <a href="#" onClick={ this._markCorrect }>
                                Mark Correct
                            </a>
                        </small>
                    </div>
                </div>
            </div>
        );
    },
    _markCorrect: function () {
        this.props.onMarkCorrect(this.props.id);
    }
});