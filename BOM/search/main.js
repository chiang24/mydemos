window.$ = function(){
  let array = []
  return array
}
$.bom ={
  openAtCenter:function(width,height,url){
    window.open(url,'_blank',
               `width=${width}px,height=${height}px,
                screenX=${screen.width/2-width/2}px,
                screenY=${screen.height/2-height/2}px`
               )
},
search:function(name,value){
  let searchAll = function(){
    let result = {}
    let search = window.location.search
    
    //去掉？
    if(search[0]=== '?'){
      search = search.slice(1)
    }

    //用&分隔成数组
    let searchArray = search.split('&')

    //遍历数组
    for(var i=0;i<searchArray.length;i++){
      let searchParts = searchArray[i].split('=')
      result[decodeURIComponent(searchParts[0])] = decodeURIComponent(searchParts[1]||'')
    }
    return result
  }
  
  //设置查询参数
  let result = searchAll()
  if(value === undefined){
    return result[name]
  }else{
    if(result[name] === undefined){
      location.search += `&${encodeURIComponent(name)}=${encodeURIComponent(value)}`
    }else{
      result[name] = encodeURIComponent(value)
      let newSearch = '?'
      for(let key in result){
        newSearch += `${encodeURIComponent(key)}=${encodeURIComponent(result[key])}&`
      }
      location.search = newSearch
    }
  }


}
}
