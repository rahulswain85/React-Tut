function customRender(reactElement, maincontainer){
    // const DOMElement = document.createElement(reactElement.type)
    // DOMElement.innerHTML = reactElement.children;
    // DOMElement.setAttribute("href", reactElement.props.href)
    // DOMElement.setAttribute("target", reactElement.props.target)

    // maincontainer.appendChild(DOMElement)


    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    for (const prop in reactElement.props){
        domElement.setAttribute(prop, reactElement.props[prop]);
    }

    maincontainer.append(domElement);
    

}

const reactElement = {
    type: 'a',
    props: {
        href: "https://google.com",
        target: "_blank",
    },
    children: 'click me to visit google'

}

const maincontainer = document.getElementById("root")

customRender(reactElement, maincontainer)