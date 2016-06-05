var React=require("react");
var Button=require("./Button");

var List=React.createClass({
     getInitialState:function(){
         return{
             count:0
         }
     },
      handleItemsEv:function(itemData){
          var k=this.props.listData.indexOf(itemData);
          this.props.listData.splice(k,1);
          this.setState({count:this.state.count++});
      },
     handleEditItemsEv:function(editData){
         console.log(editData);
         this.props.inputValChange(editData);
     },
      render:function(){
          var listItems=this.props.listData.map(function(item){
                  return (
                      
                      <li >{item}
                        <Button dataItem={item} handleItemsEv={this.handleItemsEv} name="delete"/>
                      
                        <Button name="edit" handleEditItems={this.handleEditItemsEv} editData={item}/>
                       </li>
                      
                       )
          }.bind(this));
          return(
               <ul>
                 {listItems}
                </ul>
            )
      }
});
module.exports=List;