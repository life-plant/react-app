export function getList1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            let data = {
                code: 0,
                data: [{
                    text: 1
                  },
                  {
                    text: 2
                  }
                ]
            }
            resolve(data.data);
        }, 2000)
    })
}

export function getList2() {
    return new Promise((resolve) => {
        setTimeout(() => {
            let data = {
                code: 0,
                data: [{
                    text: 3
                  },
                  {
                    text: 4
                  }
                ]
            }
            resolve(data.data);
        }, 2000)
    })
}