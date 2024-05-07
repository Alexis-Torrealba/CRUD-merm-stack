import { Route, Routes } from 'react-router-dom';
import { Taskpage } from './pages/Taskpage';
import { TasksForm } from './pages/TasksForm';
import { NotFoundPage } from './pages/NotFoundPage';
import { TaskContextProvider } from '../src/context/TaskContext';
import { Navbar } from './components/Navbar';

function App() {
	return (
		<div className="bg-zinc-900 h-screen">
			<Navbar />
			<div className="container mx-auto py-4 px-20">
				<TaskContextProvider>
					<Routes>
						<Route path="/" element={<Taskpage />} />
						<Route path="/new" element={<TasksForm />} />
						<Route path="/edit/:id" element={<TasksForm />} />
						<Route path="*" element={<NotFoundPage />} />
					</Routes>
				</TaskContextProvider>
			</div>
		</div>
	);
}

export { App };
