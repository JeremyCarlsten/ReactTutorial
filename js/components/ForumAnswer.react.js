var ForumAnswer = React.createClass({

    propTypes: {
        answer: React.PropTypes.isRequired,
        onMarkCorrect: React.PropTypes.isRequired
    },
    render: function () {

        var answer = this.props.answer;
        var markAsCorrect;
        var classNames = "panel-body";

        if(!answer.correct){
            markAsCorrect = (<div className="pull-right">
                <small>
                    <a href="#" onClick={ this._markCorrect }>
                        Mark Correct
                    </a>
                </small>
            </div>);
        }else{
            classNames += " bg-success"
        }

        return (
            <div className="panel panel-default">
                <div className={ classNames }>
                    { answer.body }
                    { markAsCorrect }
                </div>
            </div>
        );
    },
    _markCorrect: function () {
        this.props.onMarkCorrect(this.props.id);
    }
});