function fetchData(callback){
    setTimeout(()=>{
        callback("peanut butter");
    },100)
}

function fetchDataPromise(){
    return new Promise(resolve => {
        setTimeout(()=>{
            resolve("peanut butter");
        },100)
    })
}

test('the data is peanut butter', () => {
   function callback(data){
       expect(data).toBe("peanut butter")
   }
   fetchData(callback)
  });   

  const add = (a,b)=>{
      return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(a<0||b<0)
            reject(new Error('number should be no-negative'))
            resolve(a+b);
          },2000)
      })
  }


  test("should return sum",(done)=>{
      add(3,2)
      .then(sum => expect(sum).toBe(5))
      done()
  })

//   test("should test async", (done)=>{
//       setTimeout(()=>{
//         expect(1).toBe(2);
//         done()
//       },2000)
//   })
   