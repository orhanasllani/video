import React from 'react';


class SearchBar extends React.Component {

  state = { term: '' };

  onSearchChange = (event) => {
    this.setState({ term: event.target.value });
  }

  onSearchSubmit = (event) => {
    event.preventDefault();
    //console.log('AIzaSyB-cDZXch3FwWZwBddSRdFCtkKbG1l0HKM');
    this.props.onFormSubmit(this.state.term);
  }



  render() {
    return (
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              Youtube Search
            </div>
            <div className="card-body">
              <div className="form-group">
                <label>Press enter to search</label>
                <form onSubmit={this.onSearchSubmit}>
                  <input onChange={this.onSearchChange}
                       className="form-control"
                       placeholder="Kerko..."
                       type="text" value={this.state.term} />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBar;
