import styles from './UserProfile.module.css'
// test
function UserProfile({ firstName, lastName, country }) {
  return (
    <div className={styles.card}>
      <h2>First Name: {firstName}</h2>
      <h2>Last Name: {lastName}</h2>
      <h2>Country: {country}</h2>  
    </div>
  );
}

export default UserProfile;