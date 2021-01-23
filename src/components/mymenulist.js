import React, {Component} from 'react';

class EditMenuList extends Component{
    render()
    {
        return(
        
            <ol>
            <li><a onClick={function(e){          
                e.preventDefault();
            }.bind(this)} href="/">view</a></li>
            <li><a href="/">create</a></li>
            <li><a href="/"><input type="button" value="click button"></input></a></li>
            <li><a href="/"><input type="submit" value="click submit"></input></a></li>
            </ol>
        );
    }
}

export default EditMenuList;