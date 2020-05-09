import fetchMock from 'fetch-mock';
 fetchMock.mock("/getTable/list", {
      producList:[
                    {name:'dva',id:1,key:Math.random()},
                    {name:'antd',id:2,key:Math.random()}
                ]
    });