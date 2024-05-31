function printTree(treeHeight, treeGap) {
    let ans ="";
    for(i=0; i<(treeHeight); i++){
        for(q=0; q<(treeHeight*treeGap/2)-(treeGap/2)*i-1;q++){
            ans = `${ans}-`
        }
        for(j=0;j<i*treeGap+1;j++){
            ans = `${ans}*`;
        }
        for(q=0; q<(treeHeight*treeGap/2)-(treeGap/2)*i-1;q++){
            ans = `${ans}-`
        }
        ans = `${ans}\n`;
        
    }
    return ans;
}

const treeHeight = 7;
const treeGap = 4;
console.log(printTree(treeHeight, treeGap));
