import { UserProfile } from '@clerk/nextjs'

const UserProfilePage = () => <UserProfile appearance={{
    elements: {
        rootBox: { width: '100%', maxWidth: '100%', },
        cardBox: { width: '100%', maxWidth: '100%', height: 'calc(100vh - 64px)', borderColor: 'transparent' },
        scrollBox: { backgroundColor: 'transparent', borderWidth: '0px' },
        navbar: { backgroundColor: 'white' }
    },
}} />

export default UserProfilePage