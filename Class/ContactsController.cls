public class ContactsController {
   @RemoteAction
   public static List<Contact> GetAllContactsByFilter(String searchText){
       String searchString = '%' + searchText + '%';
       List<Contact> contactList = [SELECT FirstName, LastName, Phone, Email, Title FROM Contact where FirstName like :searchString];
       return contactList;
   }

   @RemoteAction
   public static List<Contact> getContactById(String recordID){
       List<Contact> contactList = [SELECT FirstName, LastName, Phone, Email, Title FROM Contact where Id = :recordID LIMIT 1];
       return contactList;
   }

   @RemoteAction
   public static void saveContactChanges(String record){
   		System.debug(record);
   		//Contact con = (Contact) record;
    	//List<Contact> con = (List<Contact>)JSON.deserialize(record, Contact.class);
    	//System.debug(con);
    	//upsert con;
   } 

}