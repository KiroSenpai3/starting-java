num1 = [5,9, 11 , 14]
num2 = [7]

const MedianOfTwoArray = (a , b) => {

    let final = [];
    let x = 0;
    let y = 0;

    const n = a.length + b.length;
    const m = (Math.floor(n/2)) + 1;

    for(let i = 0; i < m; i++){
        if(a[x] < b[y]){
            final.push(a[x]);
            x++;
            continue;
        }
        if(b[y] < a[x]){
            final.push(b[y]);
            y++;
            continue;
        }
        if(a[x] == b[y]){
            final.push(a[x]);
            x++;
            continue;
        }
        if(a.length == x){
            final.push(b[y])
            y++;
            continue;
        }
        if(b.length == y){
            final.push(a[x])
            x++;
            continue;
        }
    }

    //console.log(m)
    //console.log(final);

        if((n%2) !== 0){
            return(final[final.length - 1])
        }
        else{
            return((final[(final.length - 2)] + final[(final.length - 1)])/2)
        }

}

console.log(MedianOfTwoArray(num1, num2))