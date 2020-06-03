Function.prototype.bind = function(context,...args){
  var self = this
  
  var fbound = function(){
    return self.apply(this instanceof self ? this:context,args.concat(Array.from(arguments)))
  }
  fbound.prototype = Object.create(this.prototype)
  return fbound
}