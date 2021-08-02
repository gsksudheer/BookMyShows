import { Disclosure } from '@headlessui/react';

import { BiChevronUp, BiChevronDown } from "react-icons/bi";

const PlaysFilters = (props) => {
  return (
    <Disclosure>
        {
            ({open}) => 
                <>
                <div className="bg-white rounded-lg mb-3 p-3">
                    <Disclosure.Button className="py-2 flex items-center gap-3">
                        { open ? <BiChevronDown /> : <BiChevronUp /> }
                       <span className={open ? "text-red-500" : "text-gray-500" }>
                       {props.title}
                       </span>
                    </Disclosure.Button>
                    <Disclosure.Panel className="text-gray-500">
                       <div className="flex items-center flex-wrap gap-3">
                           {
                               props.tags.map((tag) => (
                                   <div className="border-2 border-gray-400 px-3 py-2">
                                       <span className="text-red-600">{tag}</span>
                                   </div>
                               ))
                           }
                       </div>
                    </Disclosure.Panel>
                    </div>
                </>
        }
    </Disclosure>
  )
};
export default PlaysFilters;