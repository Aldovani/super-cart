// 'use client'

// import { Banknote, BarChart2, UserRound } from 'lucide-react'

// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuTrigger,
// } from '@/components/ui/dropdown-menu'
// import { Input } from '@/components/UI/input'

// export function OrdersFilter() {
//   return (
//     <header>
//       <div className="flex justify-between items-center">
//         <div className="flex gap-2">
//           <DropdownMenu>
//             <DropdownMenuTrigger className="flex gap-2 items-center text-sm text-gray-400 font-medium leading-6 px-6 py-2 border border-gray-200 rounded-lg">
//               <Banknote />
//               <span>Valor</span>
//             </DropdownMenuTrigger>
//             <DropdownMenuContent>
//               <form className="flex flex-col p-2"></form>
//             </DropdownMenuContent>
//           </DropdownMenu>

//           <DropdownMenu>
//             <DropdownMenuTrigger className="flex gap-2 items-center text-sm text-gray-400 font-medium leading-6 px-6 py-2 border border-gray-200 rounded-lg">
//               <UserRound />
//               <span>Cliente</span>
//             </DropdownMenuTrigger>
//             <DropdownMenuContent>
//               <div></div>
//             </DropdownMenuContent>
//           </DropdownMenu>

//           <DropdownMenu>
//             <DropdownMenuTrigger className="flex gap-2 items-center text-sm text-gray-400 font-medium leading-6 px-6 py-2 border border-gray-200 rounded-lg">
//               <BarChart2 />
//               <span>Status</span>
//             </DropdownMenuTrigger>
//             <DropdownMenuContent>
//               {/* <form className="flex flex-col p-2">
//                 <Checkbox htmlFor="available" label="Disponivel" />
//                 <Checkbox htmlFor="preparation" label="Em preparo" />
//                 <Checkbox htmlFor="unavailable" label="Indisponivel" />
//               </form> */}
//             </DropdownMenuContent>
//           </DropdownMenu>
//         </div>
//         <div>
//           <Input.Field sizes="small" placeholder="Buscar por cliente" />
//         </div>
//       </div>
//     </header>
//   )
// }

import { SearchInput } from '../../../products/components/product-table/components/product-filter/components'

export async function OrdersFilter() {
  return (
    <header className="flex justify-between items-center">
      <div className="flex gap-2"></div>
      <div className="max-w-[480px] w-full">
        <SearchInput />
      </div>
    </header>
  )
}
