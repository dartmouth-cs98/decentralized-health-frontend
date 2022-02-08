// Front Page:
export const frontPage = 'This application aims to discuss the inefficiencies in the storage and retrieval of medical record data. \
We provide a solution through storing data on a blockchain to create a unified platform for data storage and improve its accessibility.';

export const probPrompt = 'What are some of the problems with current medical record technologies  and how can we alleviate these issues through storing data on the blockchain?';
export const prob1 = 'Poor data security';
export const prob1Content = 'Medical data can come in a physical form or within Electronic Health Records which are stored within centralized databases which are prone to be targeted or hacked. \
These databases can be accessed by employees who can view sensitive information about patients and can be deceived into giving away their access.';
export const prob2 = 'Poor accessibility';
export const prob2Content = 'Patients struggle to view their records and often have to contact their hospitals to view data that should be readily accessible to them in the event of an emergency.';
export const prob3 = 'Data is not interoperable';
export const prob3Content = 'Hospitals struggle to coordinate to share medical data in a secure and reliable fashion. \
This is a source of administrative costs since labour is required to perform this simple task.';
export const prob4 = 'Administrative costs in healthcare';
export const prob4Content = 'In 2020 the US government spent over $4 Trillion on healthcare. Administrative costs account for 8.3% of this expenditure, amounting to over $332 Bn. \
This expenditure is used to pay for the management and labour costs of transferring medical data between hospitals.';

export const solPrompt = 'Now let\'s discuss how storing medical records on a blockchain can alleviate these issues:';
export const sol1Content = 'The integrity of data stored on the blockchain is ensured using modern encryption standards and can only be decrypted by those whom are granted permission to. \
Patients can have full control over who can access their data and have greater confidence in the system used to store their records. \
Our application uses a MetaMask blockchain wallet which stores the patients private key which is used to securely access their data and cannot be forged.';
export const sol2Content = 'Medical record data on the blockchain becomes accessible from any computer around the world with an internet connection. \
This means that medical data is accessible by both doctors and patients regardless of their location which can be a powerful tool during time-sensitive \
medical emergencies so that hospitals around the world can give tailored medical treatment.';
export const sol3Content = 'The blockchain is able to unify medical record storage and allow hospitals to share the same data in a secure manner without the need of manually transferring data. \
This can also improve the accessibility of medical data for research purposes and automate the transfer of data.';
export const sol4Content = 'Since the blockchain eliminates the need for manual data transfer, \
hospitals save money on labour and data storage which would drastically reduce the $332 Bn spent each year on healthcare administration. \
If a global standard for medical data were to be created, global healthcare could be standardised, and savings on administrative costs could be reinvested into the healthcare system.';

// Sign Up Page:
export const signUp = 'You can sign up as a patient or a doctor which will determine what kind of user you are as well as your permissions.';

// Connect MetaMask Wallet:
export const connectWallet = 'Welcome to the main dashboard! In order to start writing to and reading from the blockchain, you need to first connect to your MetaMask wallet. \
This is a blockchain wallet that stores your private keys. Think of a private key as a signature that proves that you are who you say you are. \
This gives patients control over who has read and write permissions for their medical data. \
Make sure to change your network to the Ropsten test network and get some test Ether from the Ropsten Faucet: [https://faucet.ropsten.be/](https://faucet.ropsten.be/) \
Don\’t get too excited, the free Ether from the Ropsten test network isn’t the same Ether that is traded on cryptocurrency exchanges. \
It is purely a test currency used for the Ropsten test network and doesn\’t have any real-world value.';

// Add Doctor:
export const addDoctor = 'Great! Now let\'s see how to grant a doctor permission to view your files, and upload more as necessary. First, click on the \'Doctor\' tab in the sidebar. \
To add a doctor you can paste a doctor\’s wallet address to grant them permission to access your records from their wallet. You can add as many doctors as you would like and remove them whenever, \
this can greatly speed up the process of sharing your data. Click \'Add Doctor\', and select one of the physicians to add to your network.';

// Sign Transaction:
export const signTransaction = 'If you want to add data to a blockchain it requires someone else to validate the change and “mine” it into the database. \
This requires a gas fee to be paid to reward the miners who are putting in computational work. Click and sign the transaction to approve that you would like to add a new doctor, \
this will use your private key to prove your identity and post your transaction through to the network to make a change to the blockchain. \
The web application will make a call to a smart contract on the Ethereum blockchain which is a computer program that can only be changed by those who have permissions, \
this way your data is guaranteed to be how you left it and can only be edited by permissioned wallets.';

// View Doctors:
export const viewDoctors = 'We can now view the list of doctors you have added. \
The application is making a call to retrieve data from the smart contract on the blockchain and display the updated information on your screen! \
The advantage of data being stored on a blockchain is that you are able to access the information from anywhere in the world with just a computer and an internet connection! \
Reading information off of a blockchain does not require us to pay any gas since there are no changes being made to the state of the database since we are only viewing the data.';

// Remove Doctor:
export const removeDoctor = 'Now let\’s remove a doctor from your list of approved doctors. \
This ability to add and remove doctors gives patients greater access of control over their data and ultimately promotes a safer data economy! \
This transaction will also need to be signed by your MetaMask wallet since we are changing data that is being stored on the blockchain and the updates need to be made.';

// View Files:
export const viewFiles = 'We can view files by reading them directly off of the blockchain. These files are secured by your MetaMask wallet, only someone with your wallet address can access them. \
Again since no data on the blockchain is being changed, you are able to read your files without paying for gas.';

// Sign Up as Doctor:
export const signUpAsDoctor = 'Now try signing up as a doctor.';

// View Patients:
export const viewPatients = 'You can now view the patients that you are assigned to, previously you added yourself as a patient, and now you can add files to your record.';

// Click on patient

// Add File
export const addFile = 'As a doctor, you can now add files to a patients records. These files will be readable by both you and your patient. \
You need to sign this transaction to add the data stored within your file to the blockchain. When adding a file, these records are now unalterable.';

// Quiz
