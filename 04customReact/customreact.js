

function customRender(){
   /*const domElement= document.createElement(reactElement.type)
   domElement.innerHTML=reactElement.Children
   domElement.setAttribute('href' ,reactElement.props.href)
   domElement.setAttribute('target',reactElement.props.target)

   mainContainer.appendChild(domElement)
   */

    const domElement=document.createElement(reactElement.type)
    domElement.innerHTML=reactElement.Children
    for(const prop in reactElement.props){
        if (prop==='Children') {
            continue;
        }
        domElement.setAttribute(prop,reactElement.props[prop])
    }
    mainContainer.appendChild(domElement)




}

 const mainContainer= document.querySelector('#root')
 const reactElement={
    type: 'a',
    props : {
    href: 'https://google.com',
    target: '_blank'
    },
    Children :'Click me to visit google'
 }
 
 customRender(reactElement,mainContainer)