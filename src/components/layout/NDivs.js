import React from 'react';
import _ from 'lodash';

class NDivs extends React.Component {

  setupContainer(numberOfDivs) {
    const classes = this.props.classNames;
    const content = classes.reduce((previous, current, id) => {
      const k = current.join(' ');
      const bundle = `${previous}<div class="${k}">`;
      if (id < numberOfDivs - 1) {
        return bundle;
      }

      return bundle + this.props.children + _.repeat('</div>', numberOfDivs);
    }, []);


    return content;
  }

  render() {
    const numberOfDivs = this.props.classNames.length;
    const container = this.setupContainer(numberOfDivs);

    return (
      <div>
        <div dangerouslySetInnerHTML={ { __html: `${container}<div>` } } />
      </div>
    );
  }
}

NDivs.defaultProps = {
  classNames: [['container'], ['row'], ['small-12', 'columns']],
};

NDivs.propTypes = {
  children: React.PropTypes.string,
  classNames: React.PropTypes.array
}


export default NDivs;
