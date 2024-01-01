// ... (import statements)

import { useBreadcrumb } from './BreadcrumbContext';
import { useParams } from 'react-router-dom';
const Breadcrumb = () => {
  const { breadcrumb } = useBreadcrumb();
  const params = useParams();

console.log(params)
  // Render your breadcrumb based on the context

  return (
    <nav>
      <ul>
        {breadcrumb?.map((item, index) => (
          <li key={index}>
            {item.lable}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Breadcrumb; 
