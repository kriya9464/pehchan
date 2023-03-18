import { Button } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

import { addDoc, collection, getDocs , doc} from 'firebase/firestore';
import { db,auth } from '../firebase-config';
import './CSS/financial.css';

const Financial = () => {

    const [problem, setProblem]=useState("");
    const [pcat,setPcat]=useState("none");
    const [home, sethome]=useState(false);
    const [education,seteducation]=useState(false);
    const doubtsCollectionRef = collection(db, "doubts");
    
     
    let navigate = useNavigate();

const handleProblem=async()=>{
    await addDoc(doubtsCollectionRef, {
        problem,
        author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
      });

      //setisModalOpen(false);
      navigate('/doubts')
}

  return (
    <div>
        <div className="problem">
        <div className="prob">
            <label><h6>Select a category your doubt lies in:</h6></label>
        <select id="inputState" style={{width:"400px", height:"30px",marginLeft:"50px",marginRight:"100px"}} className="details" onClick={(e)=>setPcat(e.target.value)}>
      <option>none</option>
      <option >girl education loan</option>
      <option>education loan</option>
      <option>abroad studies loan</option>
      <option>home loan</option>
      <option>vehicle loan</option>
      <option>personal loan</option>
      <option>buisness/startup loan</option>
      <option>marriage loan</option>
      <option>medical loan</option>
      
    </select>
    <Button style={{backgroundColor:"#008ECC"}}><Link to='/doubts'>doubts</Link></Button>
    </div>
    <div className="ask">
            <label htmlFor="">Describe your Problem:</label>
            <textarea onChange={(e)=>setProblem(e.target.value)} style={{width:"800px",height:"200px"}}/>
            <Button onClick={handleProblem}>submit</Button>
            </div>
            
            
        </div>
        { pcat!=="none" && 
        <div className="solution">
            {pcat==='home loan' && <p>
                <span>
                There are various types of home loans available to finance the purchase of a house. The most common types of home loans include:
                </span>
                <span>
Conventional Loans: Conventional loans are mortgage loans that are not insured or guaranteed by the government. These loans are offered by private lenders, such as banks, credit unions, and mortgage companies.
</span>
<span>
FHA Loans: FHA loans are backed by the Federal Housing Administration and are designed to help people with lower credit scores or smaller down payments to buy homes.
</span>
<span>
VA Loans: VA loans are available to eligible veterans, active-duty service members, and surviving spouses of veterans. These loans are backed by the Department of Veterans Affairs.
</span>
<span>
USDA Loans: USDA loans are designed for low- to moderate-income homebuyers in rural areas. These loans are backed by the U.S. Department of Agriculture.
</span>
<span>
When deciding which loan to take, it's important to consider your financial situation, credit score, down payment amount, and other factors. You may want to speak with a mortgage lender or financial advisor to help you determine which loan is right for you.
</span>
<span>
The Government of India provides several schemes and incentives to encourage home ownership and make it easier for individuals to purchase their own homes. Here are some of the popular home loan schemes provided by the government:
</span>
<span>
Pradhan Mantri Awas Yojana (PMAY): PMAY is a government-backed housing scheme that provides financial assistance to individuals and families from economically weaker sections, low-income groups, and middle-income groups to purchase or construct a home. The scheme offers subsidized interest rates on home loans and also provides a subsidy on the loan amount based on the income category.
</span>
<span>
Credit Linked Subsidy Scheme (CLSS): CLSS is a part of the PMAY scheme and offers interest subsidy on home loans for individuals from economically weaker sections, low-income groups, and middle-income groups. The subsidy amount varies based on the income category and can be availed by both first-time home buyers and those who already own a house.
</span>
<span>
Pradhan Mantri Gramin Awaas Yojana (PMGAY): PMGAY is a government scheme that provides financial assistance to individuals and families from rural areas to build a home. The scheme offers subsidies on home loans and also provides financial assistance for the construction of homes in rural areas.
</span>
<span>
National Housing Bank: The National Housing Bank (NHB) is a government-owned financial institution that provides loans to housing finance companies for housing development. The NHB also offers refinancing facilities to banks and housing finance companies for their housing finance portfolio.
</span>
<span>
It is recommended to research and compare the interest rates, loan amount, and repayment options offered by various banks and NBFCs before applying for a home loan. Additionally, it is important to have a good credit score and a stable source of income to increase the chances of loan approval.
</span>
                </p>}

                {
                    pcat==="education loan" && <p>
                        <span>
                        In India, there are several types of educational loans available to help students finance their higher education. Here are some of the most common types of educational loans in India:
                        </span>
                        <span>
Education Loans from Banks: Banks offer educational loans to students who wish to pursue higher studies in India or abroad. These loans cover tuition fees, hostel fees, and other related expenses.
</span>
<spna>
Education Loans from NBFCs: Non-Banking Financial Companies (NBFCs) also offer educational loans to students, and the process is generally faster and more flexible than that of banks.
</spna>
<span>

Education Loans from Government Schemes: The government of India offers various schemes for students who need financial assistance for higher education, such as the Vidya Lakshmi Portal, Pradhan Mantri Vidya Lakshmi Karyakram, and the National Scholarship Portal.
</span><span>
Scholarships: Scholarships are another form of financial assistance for students. There are several government and private organizations that offer scholarships based on merit, need, and other criteria.
</span>
<spna>
When applying for an educational loan, you will need to provide details of the course you wish to pursue, the institution you plan to study at, and your academic and financial background. You will also need to provide collateral, such as property or other assets, to secure the loan. It's important to carefully read and understand the terms and conditions of the loan, including interest rates, repayment schedules, and any associated fees.
</spna>
<span>

The Government of India provides several schemes and incentives to encourage education and make it easier for students to finance their education. Here are some of the popular education loan schemes provided by the government:
</span>
<span>
Vidya Lakshmi Portal: Vidya Lakshmi Portal is a government portal that offers education loans to students pursuing higher education in India and abroad. The portal provides a single window for students to apply for education loans from multiple banks and financial institutions.
</span>
<span>
Central Sector Interest Subsidy Scheme: The Central Sector Interest Subsidy Scheme (CSISS) is a government scheme that provides interest subsidy on education loans for students from economically weaker sections. The subsidy is available for education loans taken for professional and technical courses after Class XII.
</span>
<span>
Pradhan Mantri Vidya Lakshmi Karyakram: The Pradhan Mantri Vidya Lakshmi Karyakram is a government scheme that offers education loans to students pursuing higher education in India and abroad. The scheme provides a single window for students to apply for education loans from multiple banks and financial institutions.
</span>
<span>
National Minorities Development and Finance Corporation: The National Minorities Development and Finance Corporation (NMDFC) is a government organization that provides education loans to students from minority communities. The loans are provided at a subsidized interest rate and can be availed for courses in India and abroad.
</span>
<span>
State Bank of India Student Loan Scheme: The State Bank of India (SBI) Student Loan Scheme offers education loans to students pursuing higher education in India and abroad. The scheme offers loans up to Rs. 1.5 crores for studies in India and Rs. 2 crores for studies abroad.
</span>
<span>
It is recommended to research and compare the interest rates, loan amount, and repayment options offered by various banks and financial institutions before applying for an education loan. Additionally, it is important to have a good academic record and a clear career plan to increase the chances of loan approval.
</span>
                    </p>
                }

                {
                    pcat==="girl education loan" && <p>
                        <span>
                        In India, there are several loan schemes available to support the education of girls. Some of the popular loan schemes include:
                        </span>
                        <span>
Bharatiya Mahila Bank Education Loan Scheme: Bharatiya Mahila Bank provides education loans to girls who want to pursue higher education in India or abroad.
</span>
<span>
SBI Scholar Loan Scheme: The State Bank of India (SBI) offers a loan scheme to meritorious girl students who want to pursue higher education in India or abroad.
</span>
<span>
Canara Bank Vidya Turant Loan Scheme: Canara Bank offers education loans to girl students who have secured admission in recognized institutions in India.
</span>
<span>

Central Bank of India Cent Vidyarthi: The Central Bank of India offers education loans to girl students who want to pursue higher education in India or abroad.
</span>
<span>
Bank of Baroda Baroda Vidya: Bank of Baroda offers education loans to girl students who want to pursue higher education in India or abroad.
</span>
<span>
These loan schemes offer various benefits such as lower interest rates, flexible repayment options, and longer repayment tenure. However, the eligibility criteria and loan amount may vary depending on the bank or financial institution. It is recommended to visit the respective bank's website or branch to get more information about the loan schemes and their requirements.
</span>
<span>

The Government of India provides several schemes and initiatives to encourage girls' education and make it easier for them to finance their education. Here are some of the popular girl education loan and plans provided by the government:
</span>
<span>
Pragati Scholarship Scheme for Girl Students: The Pragati Scholarship Scheme for Girl Students is a government scheme that provides financial assistance to girl students pursuing technical education. The scheme offers up to Rs. 50,000 per annum for a maximum of four years.
</span>
<span>
Udaan Scheme: The Udaan Scheme is a government scheme that provides girl students from economically weaker sections with financial assistance to pursue higher education in technical fields. The scheme also provides mentorship and career guidance to the students.
</span>
<span>
Beti Bachao, Beti Padhao Yojana: Beti Bachao, Beti Padhao Yojana is a government scheme that aims to promote girls' education and reduce the gender gap in education. The scheme provides financial incentives to families who send their girls to school and also provides financial assistance to the girls for higher education.
</span>
<span>
Sukanya Samriddhi Yojana: The Sukanya Samriddhi Yojana is a government scheme that provides financial assistance to parents of girl children for their education and marriage. The scheme offers a higher interest rate than most other savings schemes and can be availed for up to two girl children.
</span>
<span>
Dena Shakti Scheme: The Dena Shakti Scheme is a government scheme that provides financial assistance to women entrepreneurs for setting up or expanding their businesses. The scheme offers loans up to Rs. 20 lakhs at a subsidized interest rate.
</span>
<span>
It is recommended to research and compare the eligibility criteria, benefits, and application process for each scheme before applying. Additionally, it is important to have a good academic record and a clear career plan to increase the chances of loan approval.
</span>                  </p>
                }

                {
                    pcat==="abroad studies loan" && <p>
                        <span>
                        If you are looking to pursue your studies abroad and need financial assistance, there are several loan options available. Some of the popular loan schemes include:
                        </span>
                        <span>
Education Loan from Banks: Most of the banks offer education loans for students who wish to pursue higher studies abroad. These loans are secured loans that require collateral in the form of property or fixed deposits. The loan amount and interest rates vary from bank to bank.
</span>
<span>
Education Loan from Non-Banking Financial Companies (NBFCs): NBFCs also offer education loans for students who want to study abroad. These loans may have a higher interest rate compared to bank loans, but they offer quicker processing and disbursal of the loan amount.
</span>
<span>
Government Schemes: In India, the government offers education loans for students who want to pursue higher studies abroad. The State Bank of India offers the SBI Global Ed-Vantage Scheme, which provides loans for students who wish to pursue higher studies in select top-ranked universities in the world.
</span>
<span>
Scholarships and Grants: Many universities and organizations offer scholarships and grants for students who wish to study abroad. These scholarships and grants may cover the entire cost of tuition fees or living expenses, reducing the financial burden on students.
</span>
<span>
Before applying for an education loan, it is recommended to research and compare the interest rates, repayment options, and loan amount offered by various banks and NBFCs. It is also important to understand the terms and conditions of the loan agreement before signing it.
</span>

                    </p>
                }


                {
                    pcat==="vehicle loan" && <p>
                        <span>
                        If you are planning to purchase a vehicle in India, there are several loan options available. Some of the popular loan schemes for vehicle purchase include:
                        </span>
                        <span>
Banks: Most of the banks offer vehicle loans for both new and used vehicles. These loans are secured loans that require collateral in the form of the vehicle itself. The loan amount and interest rates vary from bank to bank, and the repayment tenure ranges from 1 to 7 years.
</span>
<span>
Non-Banking Financial Companies (NBFCs): NBFCs also offer vehicle loans for both new and used vehicles. These loans may have a higher interest rate compared to bank loans, but they offer quicker processing and disbursal of the loan amount.
</span>
<span>
Dealership Financing: Many vehicle dealerships offer financing options for vehicle purchases. These loans may have a higher interest rate compared to bank loans, but they offer convenient processing and quick disbursal of the loan amount.
</span>
<span>
Online Lending Platforms: There are several online lending platforms that offer vehicle loans. These loans have a quick processing time and offer competitive interest rates.
</span>
<span>
Before applying for a vehicle loan, it is recommended to research and compare the interest rates, repayment options, and loan amount offered by various banks and NBFCs. It is also important to understand the terms and conditions of the loan agreement before signing it.
</span>                  </p>
                }

                {
                    pcat==="personal loan" && <p>
                        <span>
                        Personal loans are unsecured loans that are offered by banks and non-banking financial companies (NBFCs) in India. These loans can be used for various purposes such as medical expenses, wedding expenses, home renovation, travel, or any other personal needs. Here are some of the popular personal loan schemes in India:
                        </span>
                        <span>
Banks: Most of the banks offer personal loans to customers who meet their eligibility criteria. The loan amount and interest rates vary from bank to bank, and the repayment tenure ranges from 1 to 5 years.
</span>
<span>
Non-Banking Financial Companies (NBFCs): NBFCs also offer personal loans to customers who meet their eligibility criteria. These loans may have a higher interest rate compared to bank loans, but they offer quicker processing and disbursal of the loan amount.
</span>
<span>
Online Lending Platforms: There are several online lending platforms that offer personal loans. These loans have a quick processing time and offer competitive interest rates.
</span>
<span>
Salary Advance Loans: Some companies offer salary advance loans to their employees. These loans are usually offered at a low interest rate and are repaid through salary deductions.
</span>
<span>
Before applying for a personal loan, it is recommended to research and compare the interest rates, repayment options, and loan amount offered by various banks and NBFCs. It is also important to understand the terms and conditions of the loan agreement before signing it.
</span>                   </p>
                }

                {
                    pcat==="marriage loan" && <p>
                        <span>
                        Marriage is a significant event in India, and the expenses associated with it can be quite high. If you are planning to get married and need financial assistance, there are several loan options available. Here are some of the popular loan schemes for marriage in India:
                        </span>
                        <span>
Banks: Most of the banks offer personal loans for marriage expenses. The loan amount and interest rates vary from bank to bank, and the repayment tenure ranges from 1 to 5 years.
</span>
<span>
Non-Banking Financial Companies (NBFCs): NBFCs also offer personal loans for marriage expenses. These loans may have a higher interest rate compared to bank loans, but they offer quicker processing and disbursal of the loan amount.
</span>
<span>
Gold Loan: Gold loan is a secured loan where you can pledge your gold jewelry or coins as collateral to obtain a loan. The loan amount and interest rates depend on the value of the gold and the loan tenure.
</span>
<span>
Online Lending Platforms: There are several online lending platforms that offer personal loans for marriage expenses. These loans have a quick processing time and offer competitive interest rates.
</span>
<span>
Before applying for a marriage loan, it is recommended to research and compare the interest rates, repayment options, and loan amount offered by various banks and NBFCs. It is also important to understand the terms and conditions of the loan agreement before signing it. Additionally, it is advisable to plan your expenses carefully to avoid taking on more debt than necessary.
</span>
                    </p>
                }

                {
                    pcat==="medical loan" && <p>
                        <span>
                        Medical emergencies can arise at any time, and the expenses associated with it can be quite high. If you are facing a medical emergency and need financial assistance, there are several loan options available in India. Here are some of the popular loan schemes for medical expenses:
                        </span>
                        <span>
Banks: Most of the banks offer personal loans for medical expenses. The loan amount and interest rates vary from bank to bank, and the repayment tenure ranges from 1 to 5 years.
</span>
<span>
Non-Banking Financial Companies (NBFCs): NBFCs also offer personal loans for medical expenses. These loans may have a higher interest rate compared to bank loans, but they offer quicker processing and disbursal of the loan amount.
</span>
<span>
Health Insurance: If you have health insurance, it may cover the medical expenses depending on the policy coverage. You can also opt for cashless treatment in network hospitals where the insurer settles the bills directly with the hospital.
</span>
<span>
Online Lending Platforms: There are several online lending platforms that offer personal loans for medical expenses. These loans have a quick processing time and offer competitive interest rates.
</span>
<span>
Before applying for a medical loan, it is recommended to research and compare the interest rates, repayment options, and loan amount offered by various banks and NBFCs. It is also important to understand the terms and conditions of the loan agreement before signing it. Additionally, it is advisable to have health insurance coverage to reduce the financial burden of medical emergencies.
</span>
<span>
The Government of India provides several financial assistance schemes for individuals who require medical treatment and support. Here are some of the popular schemes:
</span>
<span>
Pradhan Mantri Jan Arogya Yojana (PMJAY): PMJAY is a government-funded health insurance scheme that provides financial assistance up to INR 5 lakhs per family per year for secondary and tertiary hospitalization expenses.
</span>
<span>
Rashtriya Swasthya Bima Yojana (RSBY): RSBY is a government-funded health insurance scheme for individuals below the poverty line. It provides financial assistance up to INR 30,000 per year for hospitalization expenses.
</span>
<span>
Ayushman Bharat: Ayushman Bharat is a healthcare scheme that aims to provide financial assistance to vulnerable sections of the society. It offers free healthcare services and financial assistance up to INR 5 lakhs per family per year.
</span>
<span>
National Health Mission (NHM): NHM is a government-funded healthcare program that provides financial assistance for various health issues such as maternal and child health, communicable diseases, and non-communicable diseases.
</span>
<span>
Pradhan Mantri Surakshit Matritva Abhiyan (PMSMA): PMSMA is a government-funded scheme that provides financial assistance to pregnant women for medical treatment and check-ups.
</span>
<span>
Apart from these schemes, the government also provides financial assistance for specific diseases such as cancer, heart diseases, and HIV/AIDS through various schemes and programs. It is recommended to visit the official government websites to learn more about the eligibility criteria and benefits of these schemes.
</span>                   </p>
                }

                {
                    pcat==="buisness/startup loans" && <p>
<span>
The Government of India offers several startup loan schemes to support entrepreneurship and promote innovation. Here are some of the popular startup loan schemes provided by the government:
</span>
<span>
Startup India: Startup India is an initiative launched by the Government of India to promote entrepreneurship and innovation. The program offers funding support, mentorship, and networking opportunities for startups.
</span>
<span>
Pradhan Mantri Mudra Yojana: Pradhan Mantri Mudra Yojana is a government-backed loan scheme that provides financial assistance to micro-enterprises and startups. The loans are offered under three categories - Shishu, Kishore, and Tarun, depending on the stage of the business and the loan amount.
</span>
<span>
Stand-Up India: Stand-Up India is a government-backed loan scheme that aims to support women and SC/ST entrepreneurs in starting new businesses. The scheme provides loans up to Rs. 1 crore for greenfield enterprises in manufacturing, trading, or services sectors.
</span>
<span>
Credit Guarantee Fund Trust for Micro and Small Enterprises: The Credit Guarantee Fund Trust for Micro and Small Enterprises (CGTMSE) is a government-backed scheme that provides collateral-free loans up to Rs. 2 crore to micro and small enterprises. The scheme aims to encourage entrepreneurship and reduce the collateral requirement for startup loans.
</span>
<span>
National Small Industries Corporation Subsidy: The National Small Industries Corporation (NSIC) subsidy provides financial assistance to small and medium-sized businesses for technology up-gradation, marketing support, and other business-related activities.
</span>
<span>
It is recommended to visit the official government websites to learn more about the eligibility criteria and benefits of these schemes.
</span>
<span>

                        Business loans are a type of loan that provides financial assistance to individuals or companies to start or expand their business. Here are some of the popular business loan schemes available in India:
                        </span>
                        <span>
MSME Loans: MSME (Micro, Small and Medium Enterprises) loans are designed for small and medium-sized businesses. These loans provide financial assistance to meet the working capital requirements, purchase equipment, and expand the business. The loan amount and interest rates vary from bank to bank.
</span>
<span>
Mudra Loans: Mudra (Micro Units Development and Refinance Agency) loans are government-backed loans that provide financial assistance to micro-businesses and startups. These loans are categorized into three types, namely Shishu, Kishore, and Tarun, based on the loan amount and stage of the business.
</span>
<span>
Startup Loans: Startup loans are designed for entrepreneurs who are starting a new business. These loans provide financial assistance to cover the initial expenses, such as product development, market research, and other startup costs.
</span>
<span>
Business Line of Credit: A business line of credit is a flexible loan that allows businesses to borrow funds up to a pre-determined credit limit. The interest is charged only on the amount borrowed, making it a cost-effective option for businesses.
</span>
<span>
Equipment Loans: Equipment loans provide financial assistance to purchase or lease new equipment or machinery. The loan amount and interest rates depend on the type of equipment and the business's creditworthiness.
</span>
<span>
Before applying for a business loan, it is recommended to research and compare the interest rates, repayment options, and loan amount offered by various banks and NBFCs. It is also important to have a solid business plan and a good credit score to increase the chances of loan approval.
</span>                  </p>
                }

                

        </div>}
    </div>
  )
}

export default Financial