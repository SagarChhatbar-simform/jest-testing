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

  test("should test async", ()=>{
      setTimeout(()=>{
        expect(1).toBe(2);
      },2000)
  })
   