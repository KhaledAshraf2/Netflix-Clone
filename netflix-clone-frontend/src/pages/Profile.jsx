import React, {Component} from 'react';
import AvatarEditor from 'react-avatar-editor';
import SplitterLayout from 'react-splitter-layout';
import {Button,Image,Grid,Row,Col} from 'react-bootstrap';

export default class YourComponent extends React.Component {
  render() {
    var Name="Your Name",Age="Your Age",Email="Your E-mail",Gender="Male Or Female"
    var Address="Your Address"

const line= {
    width: '1px',
    backgroundColor: 'black',
    position:'absolute',
    top: '0',
    bottom: '0',
    left: '400px',
    height: '1000px',
};
const imageStyle={
  position:'absolute',
  top: '0',
  bottom: '0',
  left: '100px',
}
const infoStyle={
  position:'absolute',
  color: 'white',
  top: '170px',
  bottom: '0',
  left: '140px',
  font: 'normal normal 900 20px/2 sans-serif'
}
  return (
    <container>

    <div className="rightPane" style={{position:'absolute',width:'400px',height:'1000px',backgroundColor:'rgba(130,130,130)',}}>
      <div ClassName="image" style={imageStyle}>


        <AvatarEditor
          image="https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
          width={125}
          height={125}
          borderRadius={125}
          color={[130,130,130]} // RGBA
          rotate={0}
          link='https://github.com/nfl/react-helmet'
        />

      </div>
      <div className="PersonalInfo" style={infoStyle}>
            {Name}
            <br></br>
            {Gender}, {Age}
            <br></br>
            {Address}
            <br></br>
            {Email}
      </div>
    </div>

    <div className="leftpane" style={{psition:'absolute',width:'1500px',height:'1000px',backgroundColor:'black',left:'400px'}}>
      <h2 className="Interestslist" style={{color:'white',position:'absolute',top: '50px',bottom: '0',right: '500px'}}>Interests</h2>
          <AvatarEditor style={{position:'absolute',top: '100px',bottom: '0',right: '700px',}}
            image="https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
            width={100}
            height={100}
            color={[0, 0, 0]} // RGBA
            rotate={0}
          />
          <AvatarEditor style={{position:'absolute',top: '100px',bottom: '0',right: '500px',}}
            image="https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
            width={100}
            height={100}
          color={[0, 0, 0]}// RGBA
            rotate={0}
          />
          <AvatarEditor style={{position:'absolute',top: '100px',bottom: '0',right: '300px',}}
            image="https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
            width={100}
            height={100}
          color={[0, 0, 0]} // RGBA
            rotate={0}
          />
          <AvatarEditor style={{position:'absolute',top: '100px',bottom: '0',right: '100px',}}
            image="https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
            width={100}
            height={100}
            color={[0, 0, 0]}// RGBA
            rotate={0}
          />
      <h2 className="Watchedlist" style={{color:'white',position:'absolute',top: '250px',bottom: '0',right: '500px'}}>Watched</h2>
          <AvatarEditor style={{position:'absolute',top: '300px',bottom: '0',right: '700px',}}
            image="https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
            width={100}
            height={100}
          color={[0, 0, 0]}// RGBA
            rotate={0}
          />
          <AvatarEditor style={{position:'absolute',top: '300px',bottom: '0',right: '500px',}}
            image="https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
            width={100}
            height={100}
            color={[0, 0, 0]} // RGBA
            rotate={0}
          />
          <AvatarEditor style={{position:'absolute',top: '300px',bottom: '0',right: '300px',}}
            image="https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
            width={100}
            height={100}
            color={[0, 0, 0]} // RGBA
            rotate={0}
          />
          <AvatarEditor style={{position:'absolute',top: '300px',bottom: '0',right: '100px',}}
            image="https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
            width={100}
            height={100}
            color={[0, 0, 0]} // RGBA
            rotate={0}
          />
      <h2 className="toWatchList" style={{color:'white',position:'absolute',top: '450px',bottom: '0',right: '500px'}}>To Watch</h2>
          <AvatarEditor style={{position:'absolute',top: '500px',bottom: '0',right: '700px',}}
            image="https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
            width={100}
            height={100}
          color={[0, 0, 0]} // RGBA
            rotate={0}
          />
          <AvatarEditor style={{position:'absolute',top: '500px',bottom: '0',right: '500px',}}
            image="https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
            width={100}
            height={100}
            color={[0, 0, 0]} // RGBA
            rotate={0}
          />
          <AvatarEditor style={{position:'absolute',top: '500px',bottom: '0',right: '300px',}}
            image="https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
            width={100}
            height={100}
            color={[0, 0, 0]}// RGBA
            rotate={0}
          />
          <AvatarEditor style={{position:'absolute',top: '500px',bottom: '0',right: '100px',}}
            image="https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
            width={100}
            height={100}
          color={[0, 0, 0]} // RGBA
            rotate={0}
          />
       <h2 className="statistics" style={{color:'white',position:'absolute',top: '650px',bottom: '0',right: '500px'}}>Statistics</h2>

    </div>
  </container>
    );
  }
}
//https://dummyimage.com/600x400/00ffee/fff
