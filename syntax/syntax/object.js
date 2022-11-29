var members=['eging', 'anju','hoya'];
console.log(members[1]);
var i=0;
while(i<members.length){
    console.log('array', members[i]);
    i=i+1;
}
var roles = 
{'programmer' : 'egoing',
 'designer' : 'anju',
 'talker' : 'hoya'
};
console.log(roles.designer);

for(var name in roles){
    console.log('object', name, 'value', roles[name]);
}