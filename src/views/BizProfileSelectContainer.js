import React, { Component } from 'react';
import BizProfileSelectView from './BizProfileSelectView';

export default class BizProfileSelectContainer extends Component {
  
  constructor(props) {
    super(props);
    
    console.log('BizProfileSelect Container constructor' + this.props.user + '/' + this.props.company);
    this.state = {
      selectedCompany: ''
    };
    
    console.log('Company Container');
  }
  
  updateSelectedCompany = (company) => {
    this.setState({selectedCompany: company});
    console.log('Select company'+company);
  }
  
  getCompany = () => {
    //TODO: GET USER
    //this.props.setState({company: 1});
    console.log('Get company');
  }
  
  render() {
    return (
            <BizProfileSelectView
              selectedCompany = {this.state.selectedCompany}
              updateSelectedCompany = {this.updateSelectedCompany}
              getCompany = {this.getCompany}
            />
            
    );
  }
}
