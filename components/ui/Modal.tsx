import React from 'react'
import clsx from 'clsx'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
  title?: string
}

export function Modal({ isOpen, onClose, children, title }: ModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Content */}
      <div className="relative bg-white rounded-xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto z-50 animate-in fade-in slide-in-from-bottom-4">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-2xl z-10 p-2 rounded hover:bg-gray-100"
          aria-label="Close"
        >
          ×
        </button>

        {/* Title */}
        {title && (
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-2xl font-bold">{title}</h2>
          </div>
        )}

        {/* Content */}
        <div className="p-6">{children}</div>
      </div>
    </div>
  )
}
