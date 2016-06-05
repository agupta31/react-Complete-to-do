var React=require("react");
var List=require("./List");

var ToDo=React.createClass({
       getInitialState:function(){
            return{
                eventNo:0,
                newText:""
            }
       },
      componentWillMount:function(){
           this.data=[];
           this.text="";
           this.index=0;
      },
      handleChange:function(e){
         //do this when you are using controller form components
          this.setState({newText:e.target.value});
      },
      handleSubmit:function(e){
          e.preventDefault();
          this.data.push(this.state.newText);
          this.setState({eventNo:this.state.eventNo++,
                         newText:"" });
       },
    //function for displaying edit data
      changeText:function(editData){
           this.setState({newText:editData});
          //storing the index of the item to be edited
            this.index=this.data.indexOf(editData);
      },
    //function for updating an item.
      updateItemEv:function(){
          this.data.splice(this.index,1,this.state.newText);
          this.setState({newText:""});
      },
       render:function(){
            return(
                <div className="container">
                   <List listData={this.data} inputValChange={this.changeText}/>
                   <form onSubmit={this.handleSubmit}>
                        <input type="text"   value={this.state.newText} onChange={this.handleChange}/>
                        <button className="btn btn-primary">Add</button>
                   </form>
                      <button className="btn btn-success"onClick={this.updateItemEv}>update</button>
                  
                </div>
              
               )
       }
});
module.exports=ToDo;
