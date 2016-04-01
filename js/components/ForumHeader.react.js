var ForumHeader = React.createClass({

    render: function () {
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a href="#" className="navbar-brand">
                            React Forum
                        </a>
                    </div>
                </div>
            </nav>
        );

        // Longhand
        //return React.createElement(
        //    'nav', {className: 'navbar navbar-default'},
        //    React.createElement('div', {className: 'container-fluid'},
        //        React.createElement('div', {className: 'navbar-header'},
        //            React.createElement('a',
        //                {
        //                    className: 'navbar-brand',
        //                    href: '#'
        //                }, "React Forum")
        //        )
        //    )
        //);
    }
});