import { createContext, useEffect, useState } from "react";
import { PostPaymentApi } from "../../api/payment/PaymentApi";
import { FetchApiDesignById } from "../../api/Requirements/FetchApiDesign";
import useAuth from "../../hooks/useAuth";

export const summaryContext = createContext();
export function SummaryContext({children, requirementData, ChangeToggle, status, setStatus}) {
    const [total, setTotal] = useState("");
    const [designDetail, setDesignDetail] = useState({});
    const {UserId} = useAuth();
    const [requirementDetail, setRequirementDetail] = useState(requirementData);
    console.log(requirementData);

    async function payNow() {
        const paymentRequest = {
            "id": "string",
            "paymentContent": "Payment for order #" + requirementDetail.requirementId,
            "paymentCurrency": "VND",
            "paymentRefId": "string",
            "paymentLanguage": "EN",
            "merchantId": "MERCHANT123",
            "paymentDestinationId": "DEST123",
            "paymentStatus": "Completed",
            "userId": Number(UserId),
            "requirementId": requirementDetail.requirementId
        };
    
        try {
            const responseUrl = await PostPaymentApi(paymentRequest);
            if (responseUrl) {
                console.log(responseUrl);
                window.location.href = responseUrl;
            } else {
                console.error('Failed to get response URL.');
            }
        } catch (error) {
            console.error('Payment processing failed:', error);
        }
    }
    
    async function loadData(){
        const getDesignDetail = await FetchApiDesignById(requirementDetail.designId);
        setDesignDetail(getDesignDetail);
              
    }
    useEffect(()=>{
        loadData();
    },[])
    useEffect(()=>{
        let masterGemstoneTotal = 0
        let stonesTotal = 0
        let priceMaterial = 0
        if(requirementDetail.status > 3){
            masterGemstoneTotal = requirementDetail.materialPriceAtMoment;
            stonesTotal = requirementDetail.stonePriceAtMoment;
            priceMaterial = requirementDetail.materialPriceAtMoment * requirementDetail.weightOfMaterial;
        } else {
            masterGemstoneTotal = designDetail.masterGemstone!=null? designDetail.masterGemstone?.price : 0;
            stonesTotal = designDetail.stone!=null? designDetail.stone?.price:0;
            priceMaterial = designDetail.material!=null? designDetail.material?.price*requirementDetail.weightOfMaterial: 0;
        }
        // const masterGemstoneTotal = designDetail.masterGemstone!=null? designDetail.masterGemstone?.price : 0;
        // const stonesTotal = designDetail.stone!=null? designDetail.stone?.price:0;
        // const priceMaterial = designDetail.material!=null? designDetail.material?.price: 0;

        const totalMoney =  requirementDetail.machiningFee+ masterGemstoneTotal + stonesTotal + priceMaterial;
        setTotal(totalMoney);  
       
    },[designDetail])
    return (<summaryContext.Provider value={{total, payNow,requirementDetail, designDetail, ChangeToggle, status,setStatus}}>
        {children}
    </summaryContext.Provider>  );
}
