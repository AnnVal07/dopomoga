import React from "react";
import { Image  } from 'semantic-ui-react';

export const HelperFarmBlockImg = (props) =>{

    let {
        img = '',
        title = '',
        alt = '',
        typeImg = 'normal',
        widthBlock = 0
    } = props;
    let normalImg = true,
        defaultImage = '',
        smallImage = '',
        mediumImage = '',
        largeImage = '';

    if(img.includes('.')){
        img = img.match( /[\w+|\W]*(?=\.)/gi );
        normalImg = false;
    }

    let dir = '/external/img';
    if(process.env.NODE_ENV === 'development'){ // for webpack devServer
        dir = '/img';
    }

    if(normalImg){
        defaultImage = `${dir}/${img}.jpg`;
        smallImage = `${dir}/${img}-small.webp`;
        mediumImage = `${dir}/${img}-medium.jpg`;
        largeImage = `${dir}/${img}.webp`;
    }else{
        defaultImage = `${dir}/${img[0]}.jpg`;
        smallImage = `${dir}/${img[0]}-small.webp`;
        mediumImage = `${dir}/${img[0]}-medium.jpg`;
        largeImage = `${dir}/${img[0]}.webp`;
    }
    
    if(widthBlock <= 500){
        defaultImage = `${dir}/${img[0]}-small.jpg`;
    }

    if (typeImg == 'normal'){
        try{
            return (
                <picture>
                    <source type="image/webp" media="(min-width: 851px)" srcSet={require(largeImage)} />
                    <source type="image/webp" media="(min-width: 626px) and (max-width: 850px)" srcSet={require(mediumImage)} />
                    <source type="image/webp" media="(max-width: 625px)" srcSet={require(smallImage)} />
                    <img src={defaultImage} alt={alt} title={title} onError={(e)=>{ if (e.target.src !== '/img/free-range-beef.jpg'){e.target.src='/img/free-range-beef.jpg';}}}  />
                </picture>
            )
        }catch(e){
            return (
                        <img src={defaultImage} alt={alt} title={title} onError={(e)=>{ if (e.target.src !== '/img/free-range-beef.jpg'){e.target.src='/img/free-range-beef.jpg';}}}  />        
                    )
        }
        
    }else{
        defaultImage = `/img/free-range-beef-low.jpg`;
        return(
            <img src={defaultImage} alt={alt} title={title} onError={(e)=>{ if (e.target.src !== '/img/free-range-beef.jpg'){e.target.src='/img/free-range-beef.jpg';}}}/>
        )
    }


    // if(process.env.NODE_ENV === 'development'){
    //     try{
    //         img = require(`./img/${img}`);
    //     }catch(e){
    //         // console.log(e);
    //         img = `./external/img/${img}`;
    //         return (
    //             <img src={img} alt={alt} title={title} onError={(e) => e.target.src='/img/free-range-beef.jpg'}/>
    //         )
    //     }
    // }else{
    //     try{
    //         img = `/img/${img}`;
    //     }catch(e){
    //         console.log(e);
    //         img = `/external/img/${img}`;
    //     }
    // }

}

export const HelperFarmImg = (props) => {
    let propsObj = props;
    let {
        img = '',
        title = '',
        alt = 'farm-img'
    } = propsObj;

    if(process.env.NODE_ENV === 'development'){
        try{
            img = require(`./img/${img}`);
        }catch(e){
            console.log(e);
            img = `./external/img/${img}`;
        }
    }else{
        try{
            img = `/img/${img}`;
        }catch(e){
            console.log(e);
            img = `/external/img/${img}`;
        }
    }
    return (
        <Image
            // label={{ as: 'a', color: 'blue', content: 'Farm', icon: 'question circle outline', ribbon: true }}
            src={img} alt={alt} title={title} itemProp="image" className="one-farm--img img-fluid" fluid rounded centered
            onError={(e) => e.target.src='/img/free-range-beef.jpg'}
        />
    )
}

export const HelperFirstPageImage = (props) =>{

    let {
        img,
        href = '',
        alt = '',
        title = '',
        dataGa = '',
        sendGaEvents,
        typeImg = 'normal',
        widthBlock = 0
    } = props;
    let defaultImage = '',
        smallImage = '',
        mediumImage = '',
        largeImage = '';
        
    img = img.match( /[\w+|\W]*(?=\.)/gi );

    let dir = './external/img';
    if(process.env.NODE_ENV === 'development'){ // for webpack devServer
        dir = './img';
    }
    defaultImage = `${dir}/${img[0]}.jpg`;
    smallImage = `${dir}/${img[0]}-small.webp`;
    mediumImage = `${dir}/${img[0]}-tablet.webp`;
    largeImage = `${dir}/${img[0]}.webp`;

    if(widthBlock <= 500){
        defaultImage = `${dir}/${img[0]}-small.jpg`;
    }

    if (typeImg == 'normal'){
        return (
            <a href={href} className="ui image">
                <picture className="z_page--content-picture">
                    <source type="image/webp" media="(min-width: 851px)" srcSet={largeImage} />
                    <source type="image/webp" media="(min-width: 626px) and (max-width: 850px)" srcSet={mediumImage} />
                    <source type="image/webp" media="(max-width: 625px)" srcSet={smallImage} />
                    <img onClick={()=>sendGaEvents(dataGa)} src={defaultImage} alt={alt} title={title} style={{width: "auto"}} onError={(e)=>{ if (e.target.src !== './img/free-range-beef.jpg'){e.target.src='./img/free-range-beef.jpg';}}}  />
                </picture>
            </a> 
        )
    }else{
        defaultImage = `${dir}/${img[0]}-low.jpg`;
        return(
            <a href={href} className="ui image">
                <img onClick={()=>sendGaEvents(dataGa)} src={defaultImage} alt={alt} title={title} onError={(e)=>{ if (e.target.src !== './img/free-range-beef.jpg'){e.target.src='./img/free-range-beef.jpg';}}}  />
            </a>
        )
    }
}

export const HelperBlogImage = (props) =>{

    let propImg = props;
    let {
        img = [],
        alt = '',
        title = '',
        widthBlock = 0,
        onChangeArticle,
        id,
        dataGa = '',
        indexBlog,
        typeImg = 'normal'
    } = propImg;
    let defaultImage = '',
        smallImage = '',
        largeImage = '';

    if(widthBlock <= 500){
        defaultImage = `./img/${img[1]}`;
    }else{
        defaultImage = `./img/${img[0]}`;
    }
    smallImage = `./img/${img[3]}`;
    largeImage = `./img/${img[2]}`;

    if (typeImg == 'normal'){
        
        try{
            let info = require(smallImage);
            if(info){
                return (
                    <picture onClick={() => onChangeArticle(id, indexBlog, dataGa)} className="z_page--content-picture">
                        <source type="image/webp" media="(min-width: 501px)" srcSet={largeImage} onError={(e)=>{ console.log('e.target.', e.target); if (e.target.src !== './img/free-range-beef.webp'){e.target.src='./img/free-range-beef.webp';}}}/>
                        <source type="image/webp" media="(max-width: 500px)" srcSet={smallImage} onError={(e)=>{ if (e.target.src !== './img/free-range-beef.webp'){e.target.src='./img/free-range-beef.webp';}}} />
                        <img src={defaultImage} alt={alt} title={title} style={{width: "auto"}} onError={(e)=>{ if (e.target.src !== './img/free-range-beef.jpg'){e.target.src='./img/free-range-beef.jpg';}}} />
                    </picture>
                )  
            }
        }catch(e){
            return (
                <img src={defaultImage} alt={alt} title={title} style={{width: "auto"}} onClick={() => onChangeArticle(id, indexBlog, dataGa)} onError={(e)=>{ if (e.target.src !== './img/free-range-beef.jpg'){e.target.src='./img/free-range-beef.jpg';}}} />
            ) 
        }
    }else{
        img = img[0].match( /[\w+|\W]*(?=\.)/gi );
        defaultImage = `./img/${img[0]}-low.jpg`;

        return(
            <img onClick={() => onChangeArticle(id, indexBlog, dataGa)} src={defaultImage} alt={alt} title={title} onError={(e)=>{ if (e.target.src !== './img/free-range-beef.jpg'){e.target.src='./img/free-range-beef.jpg';}}}  />
        )
    }
}

export const HelperSimpleImage = () =>{
    return (
        <img alt="check" src="./img/icon/check_5.svg" width="30px"/>
    )
}
