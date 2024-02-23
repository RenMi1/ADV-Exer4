import React from 'react';
import { Tab } from '@headlessui/react'; 
import classNames from 'classnames';

const Completed = ({ categories }) => {
  return (
    <Tab.Panel>
      {categories && categories['Completed'] && categories['Completed'].length > 0 ? (
        <ul className="overflow-y-auto max-h-96">
          {categories['Completed'].map((post) => (
            <li
              key={post.id}
              className={classNames(
                'relative rounded-md p-4 hover:bg-pink-100',
                'flex items-center justify-between',
                'cursor-pointer transition-all duration-300'
              )}
            >
              <h3 className={classNames(
                'text-lg leading-6',
                {
                  'line-through text-pink-500': post.completed,
                  'text-pink-900': !post.completed,
                }
              )}>
                {post.title}
              </h3>
              <div>
                <p className="text-sm text-pink-500">Completed on: {post.completionDate}</p>
              </div>
            </li>
          ))}
        </ul>
      ) : null}
    </Tab.Panel>
  );
};

export default Completed;
