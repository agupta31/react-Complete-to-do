var React=require("react");

var Button=React.createClass({
      handleItems:function(){
        
         this.props.handleItemsEv(this.props.dataItem);
      },
     handleEdit:function(){
        this.props.handleEditItems(this.props.editData);
     },
      render:function(){
           return(
               <button className={"btn btn-"+(this.props.name==="delete"?"info":"danger")}onClick={this.props.name==='delete'?this.handleItems:this.handleEdit}>{this.props.name}</button>
             )
      }
});
module.exports=Button;