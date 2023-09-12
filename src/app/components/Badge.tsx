import React, { useEffect, useState } from 'react'

export default function Badge({ children }: { children: React.ReactNode }) {

    const cor = "#a280e0";

    return (
        <div className={`text-[12px] text-white py-1 px-3 rounded-full  font-bold`} style={{ backgroundColor: cor }}>{children}</div>
    )
}
