import { Link, Head } from '@inertiajs/inertia-react';
import './Welcome.css';

export default function Welcome(props) {
    return (
        <>
            <Head title="Welcome" />
            <div className="relative flex justify-center min-h-screen bg-gray-100 items-top dark:bg-gray-900 sm:items-center sm:pt-0">
                <div className="fixed top-0 right-0 px-6 py-4 sm:block">
                    {props.auth.user ? (
                        <Link href={route('dashboard')} className="text-sm text-gray-700 underline dark:text-gray-500">
                            Dashboard
                        </Link>
                    ) : (
                        <>
                            <Link href={route('login')} className="text-sm text-gray-700 underline dark:text-gray-500">
                                Log in
                            </Link>

                            <Link
                                href={route('register')}
                                className="ml-4 text-sm text-gray-700 underline dark:text-gray-500"
                            >
                                Register
                            </Link>
                        </>
                    )}
             
                </div>
                <div className="welcome-page">
      <div className="welcome-page-header">
        <h1>Welcome to My App!</h1>
      </div>
      <div className="welcome-page-body">
        <p>Thank you for visiting. We hope you enjoy using our app as much as we enjoyed building it.</p>
        <p>This app is designed to help you manage your tasks and stay organized. You can create new tasks, mark them as complete, and view your progress over time.</p>
        <p>To get started, click the button below to create your first Chirp. Have fun!</p>
        <Link
                                href={route('register')}
                                className="ml-4 text-sm text-gray-700 underline dark:text-gray-500"
                            >
                                <button>Create</button>
                            </Link>
      </div>
      <div className="welcome-page-footer">
        <p>Copyright &copy; {new Date().getFullYear()} Our App</p>
      </div>
    </div>
  

             </div>           
                

                        
                   
                
            
        </>
    );
}
