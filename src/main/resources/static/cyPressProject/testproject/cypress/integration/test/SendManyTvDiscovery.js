context('Send Many TV Test', () => {

    beforeEach(function() {
	    cy.log('beforeEach')
        cy.fixture('tvdata.json').as('TVData')
    })

    function generateIpAddress(index) {
        let ipAddress = "127.1.1.1"   

        if (index == 0) {
            index = 1
        }

        if (index > 0 && index <= 255) {
            ipAddress = "127.1.1." + index
        } else if (index > 255 && index <= 510) {
            index = index - 255
            ipAddress = "127.1.2." + index
        } else if (index > 510 && index <= 755) {
            index = index - 510
            ipAddress = "127.1.3." + index
        } else if (index > 755 && index <= 1020) {
            index = index - 755
            ipAddress = "127.1.4." + index
        }

        return ipAddress
    }

    function generateMacAddress(index) {
        let macAddress = "70:AF:24:1A:97:51" 
        
        if (index >= 0 && index <= 9) {
            macAddress = "0" + index + ":AF:24:1A:97:51"
        } else if (index >= 10 && index <= 99) {
            macAddress = index + ":AF:24:1A:97:51"
        } else if (index >= 100 && index <= 999) {
            let index = Math.floor(index / 10)
            macAddress = "AF:" + index + ":24:1A:97:51"
        } else if (index >=1000 && index <= 9999) {
            let index = Math.floor(index / 100)
            macAddress = "AF:BE:" + index + ":1A:97:51"
        }

        return macAddress
    }

    function generateRoomId(index) {
        let roomId = "00000"

        if (index >= 0 && index <= 9) {
            roomId = "0000" + index
        } else if (index >= 10 && index <= 99) {
            roomId = "000" + index
        } else if (index >= 100 && index <= 999) {
            roomId = "00" + index
        } else if (index >= 1000 && index <= 9999) {
            roomId = "0" + index
        } else if (index >= 10000 && index <= 99999) {
            roomId = index
        }

        return roomId
    }

    function generateTVSerialNumber(index) {
        let tvSerialNumber = "12345678"

        if (index >= 0 && index < 10) {
            tvSerialNumber = "1234" + index
        } else if (index >= 10 && index < 99) {
            tvSerialNumber = "1234" + index
        } else if (index >= 99 && index < 999) {
            tvSerialNumber = "1234" + index
        } else if (index >= 999 && index < 9999) {
            tvSerialNumber = "1234" + index
        }

        return tvSerialNumber
    }

    function generateTVDiscoveryData(tvDiscoveryData, index) {
        let commandDetailsObj = tvDiscoveryData.CommandDetails
        let tvDiscoveryParametersObj = commandDetailsObj.TVDiscoveryParameters
        let webServiceParametersObj = commandDetailsObj.WebServiceParameters
        tvDiscoveryParametersObj.TVIPAddress = generateIpAddress(index)
        let tvMACAddress = generateMacAddress(index)
        tvDiscoveryParametersObj.TVMACAddress = tvMACAddress
        let tvRoomID = generateRoomId(index)
        tvDiscoveryParametersObj.TVRoomID = tvRoomID
        let tvSerialNumber = generateTVSerialNumber(index)
        tvDiscoveryParametersObj.TVSerialNumber = tvSerialNumber
        let tvUniqueID = tvSerialNumber + tvMACAddress.replace(/:/g, "")
        webServiceParametersObj.TVUniqueID = tvUniqueID
        return tvDiscoveryData
    }

    function sendRequestCommand(tvData, i) {
         
        let commonRequest = {
            method: 'POST',
            form: false,
            headers: {
                "Authorization": "whateverYouNeedForAuthentication",
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            url: null,
            body: null
        }  
        commonRequest.url = tvData.WebServicesUrl  
        let tvDiscoveryData = tvData.TVDiscoveryData  
        let newTvDiscoveryData = generateTVDiscoveryData(tvDiscoveryData, i)
        let currentTVUniqueID = newTvDiscoveryData.CommandDetails.WebServiceParameters.TVUniqueID
        commonRequest.body = JSON.stringify(newTvDiscoveryData);
        cy.log("current tv count:" + i)
        cy.request(commonRequest).then((resp)=>{
            cy.log("send TVDiscovery status:" + resp.status)
            cy.wait(2000)
              .then(() => {
                    let readyForUpgradeData = tvData.ReadyForUpgradeData
                    readyForUpgradeData.CommandDetails.WebServiceParameters.TVUniqueID = currentTVUniqueID
                    commonRequest.url = tvData.WebServicesUrl 
                    commonRequest.body = JSON.stringify(readyForUpgradeData)
                    cy.request(commonRequest).then((res) => {
                        cy.log("send ReadyForUpgradeData status:" + res.status)
                        cy.wait(2000)
                    })
              })
        })
    }

    it('send tvdiscovery data', () =>{
        cy.get('@TVData').then((tvData) => {
            cy.wait(3000)
            let genarateTotalTvs = 100
            let generateTvTimeInterval = 8000
            
            for(let i = 1; i <= genarateTotalTvs; i++) {                                           
                setTimeout(sendRequestCommand(tvData, i), generateTvTimeInterval)
            }                      
        })
    })

})