import React, { Component } from "react";
import axios from "axios";

class CurrentCharacter extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      id: null,
      img: "",
      imgStaged: "",
      nameStaged: "",
      updateName: '',
      updateToggle: false
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleImgChange = this.handleImgChange.bind(this);
    this.makePlayer = this.makePlayer.bind(this);
    this.update = this.update.bind(this)
    this.updateNameChanger = this.updateNameChanger.bind(this)
    this.beFree = this.beFree.bind(this)
  }

  handleNameChange = value => {
    this.setState({ nameStaged: value });
  };
  handleImgChange = value => {
    this.setState({ imgStaged: value });
  };
  makePlayer() {
    this.setState({ img: this.state.imgStaged, name: this.state.nameStaged }, ()=> {

        axios
        .post("/api/smasher", { name: this.state.name, img: this.state.img })
        .then(res => {
            this.setState({
                name: res.data.name,
                id: res.data.id,
                img: res.data.img,
                nameStaged: '',
                imgStaged: ''
            })
            
        })
        .catch(err => console.log(err));
    });
  }

  update() {
      
      axios.put(`/api/smasher/${this.state.id}`, {name: this.state.updateName}).then(
          res => {
              this.setState({name: res.data.name, updateName: ''})
          }
      ).catch(err => console.log(err))
  }
  updateNameChanger(value){
      this.setState({updateName: value})

  }
  beFree(){
      axios.delete(`/api/smasher/${this.state.id}`).then(res => {
          this.setState({id: null})
      })
  }
  render() {
        console.log(this.state.updateName)
    // console.log(this.state.name);
   
    if(this.state.id === null & this.state.updateToggle=== false){
    return (
      <div>
        <div className='center'>
          <div>
            <input id='field'
              placeholder="Enter Name here"
              value={this.state.nameStaged}
              onChange={e => this.handleNameChange(e.target.value)}
            />
            <input id='field'
              placeHolder="Image URL here"
              value={this.state.imgStaged}
              onChange={e => this.handleImgChange(e.target.value)}
            />
          </div>
          <button id='oppButton' onClick={this.makePlayer}>Create</button>
        </div>
      </div>
    );
    }else{
        return(
        <div>     
            <div className='center'>
                <img className="currentPlayer" src={this.state.img} />
                <span>{this.state.name}</span>
                <div>
                  <button id='oppButton' onClick={this.beFree}>Delete</button>
                  <input value={this.state.nameChange} onChange={e => this.updateNameChanger(e.target.value)}/>
                  <button id='oppButton' onClick={this.update}>Update</button>
                </div>
            </div>
        </div>    
        )
    

    }
  }
}

export default CurrentCharacter;
