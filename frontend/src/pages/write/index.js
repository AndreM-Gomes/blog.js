import React from 'react'
import {useHistory} from 'react-router-dom'

import './styles.css'
import Header from '../../components/header'
const converter  = new Showdown.Converter({
  tables: true,
  simplifieldAutoLink: true,
  striketrough: true,
  tasklist: true,
})

export default function Write()  {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("");
  const [selectedTab, setSelectedTab] = useState("write");

    const history = useHistory()

    const [loged] = useAuth()

    if(!loged){
      return(
        <div>
          <Header/>
          <div className='write-page'>
            <imput></imput>
  if(user) {
    return(
      <div className='container'>
        <Header/>
        <div className='write-page card'>
          <form action="submit">
            <input placeholder='title' onChange={setTitle}></input>
            <div className='editor'>
              <ReactMde
                value={content}
                onChange={setContent}
                selectedTab={selectedTab}
                onTabChange={setSelectedTab}
                generateMarkdownPreview={markdown =>
                  Promise.resolve(converter.makeHtml(markdown))
              }/>
            </div>
          </form>
          <div className="action">
            <button className='main' onClick={handlePost}>Post</button>
          </div>
        </div>
      )
    }
    else {
      history.push('/register')
      return null
    }
}