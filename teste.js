function t(a, b) {
document.write(a + b);

}

function cl() {
    var name="Susana"
    
    this.getName = function(){
        return name;
    }
    this.setName = function(n){
        name=n;
    }
    
}

function ol() {
     n =new cl();
    n.setName("Suuuu")
    document.getElementById('name').innerHTML = n.getName();
}