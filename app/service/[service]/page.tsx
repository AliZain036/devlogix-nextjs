import ServicesDetails from '../../components/ServicesDetails'

// Generate static params for static export
export function generateStaticParams() {
  return [
    { service: 'web-development' },
    { service: 'mobile-development' },
    { service: 'ui-ux-design' },
    { service: 'backend-development' },
    { service: 'cloud-solutions' },
    { service: 'cybersecurity' },
  ]
}

export default async function ServicePage({ params }: { params: Promise<{ service: string }> }) {
  const { service } = await params
  return <ServicesDetails service={service} />
}

